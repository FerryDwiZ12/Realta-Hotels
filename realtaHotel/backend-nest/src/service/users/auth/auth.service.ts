import { Injectable, BadRequestException, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'entities/Users';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { UserPassword } from 'entities/UserPassword';
// import {nodemailer} from 'nodemailer';

import { throwError } from 'rxjs';
import { ValidationError } from 'class-validator';
import { UserRoles } from 'entities/UserRoles';

@Injectable()
export class AuthService implements CanActivate{
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,

        @InjectRepository(UserRoles)
        private userRolesRepository: Repository<UserRoles>,

        @InjectRepository(UserPassword)
        private userPasswordRepository: Repository<UserPassword>

    ) { }

    async findEmail(email: string): Promise<any>{
        return await this.userRepository.findOneBy({
            userEmail: email
        }).then((result: any) => {
            return result
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        });
    }

    async login(data: any): Promise<any> {
        return await this.findEmail(data.userEmail).then(async (users) => {
            if (users.userEmail == data.userEmail) {
                const IdUser = await this.userRepository.findOneBy({
                    userEmail: users.userEmail
                }).then((result: any) => {
                    return result.userId
                }).catch((err: any) => {
                    return err
                });
    
                const passwordUser = await this.userRepository.findOne({
                    where: { userId: IdUser },
                    relations: [
                        "userRoles",
                        "userPassword"
                    ]
                }).then((result: any) => {
                    return result.userPassword.uspaPasswordhash
                }).catch((err: any) => {
                    return {
                        message: err.message,
                        error: err.name
                    }
                });

                let payload ={}
    
                if (await bcrypt.compare(data.userPassword, passwordUser)) {
                    const token = await jwt.sign(
                        payload,
                        process.env.SECRET_KEY,
                        { expiresIn: '3m' }
                    );
                    
                    payload = await this.userRepository.query(`
                        SELECT * FROM users.users uuu
                        LEFT JOIN users.user_roles uur ON uur.usro_user_id = uuu.user_id 
                        LEFT JOIN users.user_profiles uups ON uups.uspro_user_id = uuu.user_id
                        WHERE uuu.user_id = ${IdUser} 
                    `).then(async(result: any) => {
                        if (!result) {
                            throw new NotFoundException('Data not found');
                        }

                        return result;
                        
                    }).catch((err: any) => {
                        return {
                            message: err.message,
                            error: err.name
                        };
                    });
                    
                    return {
                        message: 'Login successfully',
                        userdata: payload,
                        token: token
                    }
                } else {
                    throw new BadRequestException('Password Invalid');
                }
            } else {
                throw new BadRequestException('Email invalid');
            }   
        }).catch((err: any) => {
            return {
                message: err.message,
                error: err.name
            }
        })       
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            request.userData = decoded;
            return true;
        } catch (error) {
            return false;
        }
    }

       async register (data1: Users, data2:UserRoles, data3: UserPassword) {
        const manager = this.userPasswordRepository.manager;
        try {
            let savedUser;
            let savedUserPassword; 
            let savedUserRoles;
            let IDuser;
            await manager.transaction(async (transactionalEntityManager) => {
                const user = new Users();
                user.userFullName = data1.userFullName;
                user.userEmail = data1.userEmail;
                user.userModifiedDate = new Date();
                savedUser = await transactionalEntityManager.save(user)
                .then((result: any) => {
                    if (!result) {
                        throw new BadRequestException('Data users insert failed');;
                    }
                    IDuser = result.userId;
                    return result
                }).catch((err: any) => {
                    return {
                        message: err.message,
                        error: err.name
                    };
                });

                const userRoles:any = new UserRoles();
                userRoles.usroUserId = IDuser;
                userRoles.usroRole = 5;
                savedUserRoles = await transactionalEntityManager.save(userRoles)
                    .then((result: any) => {
                        if (!result) {
                            throw new BadRequestException('Data userRoles insert failed');
                        }
                        return result;
                    }).catch((err: any) => {
                        return {
                            message: err.message,
                            error: err.name
                        }
                    });

                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(data3.uspaPasswordhash,salt);
                const userPassword = new UserPassword();
                userPassword.uspaPasswordhash = hashedPassword;
                userPassword.uspaPasswordsalt = 'bcrypt';
                userPassword.uspaUserId = IDuser;
                savedUserPassword = await transactionalEntityManager.save(userPassword)
                .then((result: any) => {
                    if (!result) {
                        throw new Error();
                    }
                    return result
                }).catch((err: any) => {
                    return {
                        message: err.message,
                        error: err.name
                    }
                });

                // const nodemailer = require("nodemailer");
                // // Generate test SMTP service account from ethereal.email
                // // Only needed if you don't have a real mail account for testing
                // // let testAccount = await nodemailer.createTestAccount();

                // // create reusable transporter object using the default SMTP transport
                // let transporter = nodemailer.createTransport({
                //     host: "smtp.ethereal.email",
                //     port: 465,
                //     secure: true, // true for 465, false for other ports
                //     auth: {
                //     user: 'shinobibootcamp@gmail.com', // generated ethereal user
                //     pass: 'Faqih_12195', // generated ethereal password
                //     },
                // });

                // // send mail with defined transport object
                // let info = await transporter.sendMail({
                //     from: '"Fred Foo 👻" <shinobibootcamp@gmail.com>', // sender address
                //     to: " shinobiprogrammer@gmail.com", // list of receivers
                //     subject: "Hello ✔", // Subject line
                //     text: "Hello world?", // plain text body
                //     html: "<b>Hello world?</b>", // html body
                // });

                // console.log("Message sent: %s", info.messageId);
                // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

                // // Preview only available when sending through an Ethereal account
                // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            });
            // if (!savedUser) {
            //     throw Error('Failed, email already exists')
            // } else if ( !savedUserPassword) {
            //     throw Error('Failed, password is not strong enough')
            // } else {
            //     return {
            //         result: { savedUser, savedUserPassword },
            //     };
            // }
            
            if (!savedUser) {
                throw new Error('Failed, email already exists')
            } else if ( !savedUserPassword) {
                throw new Error('Failed, password is not strong enough')
            } else if(!savedUser && !savedUserPassword) {
                throw new Error('Failed, email already exists and password is not strong enough')
            } else {
                return {
                    message: "Register Successfully",
                    savedUser, savedUserRoles, savedUserPassword
                }
            }
        } catch (err) {
            this.userRepository.query(`
                users.roles, users.users, users.user_members, users.user_profiles, users.user_roles, users.user_password, users.user_bonus_points restart identity cascade;
            `);
            return {
            error: err.name,
            message: err.message
        };
        }
    }
    
}
