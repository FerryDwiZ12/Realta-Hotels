import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import PopUpEditRestoMenu from "@/components/Resto/PopUpEditRestoMenu";
import { doCreateRestoMenus, doDeleteRestoMenus, doRestoMenusRequest } from "@/redux/Actions/Resto/reduceActions";
import restoMenusReducers from "@/redux/Reducers/Resto/restoMenusReducer";
import { Box } from "@mui/material";
import { result } from "lodash";
import { Button, Modal, List } from "antd";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { array } from "yup/lib/locale";

export default function RestoMenus() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const router = useRouter();

  const [Data, setData]: any = useState([]);

  const restoMenus = useSelector((state: any) => state.restoMenusReducers.restoMenus);
  const dispatch = useDispatch();
  console.log(restoMenus);

  const [id, setId] = useState();
  const [openAdd, setAdd] = useState(false);

  //triger add photos
  const [addPhotos, setOpenAddPhotos] = useState(false);

  //  dispatch API GET resto
  useEffect(() => {
    dispatch(doRestoMenusRequest());
  }, [restoMenus]);

  // setData API GET resto
  const dispatchDelete = useDispatch();

  useEffect(() => {
    if (restoMenus && restoMenus.results) {
      setData(restoMenus.results);
    }
  });

  // console.log(Data);

  const handleDelete = (id: number) => {
    console.log(id);
    dispatchDelete(doDeleteRestoMenus(id));
    dispatch(doRestoMenusRequest());
  };

  const handleEdit = (id: any) => {
    setOpen(true), setId(id);

    console.log(id);
  };

  const [open, setOpen] = useState(false);

  // const [open, setOpen] = useState(false);
  // const [popUpEdit, setPopUpEdit] = useState(false);

  //=================Upload Foto========================//

  const handleAddPhotos = () => {};

  //===================ADD DATA=====================//

  const [dataAdd, setDataAdd] = useState({
    remeName: "",
    remeDescription: "",
    remePrice: "",
    remeStatus: "",
    file: null,
  });

  const handleChange = (event: any) => {
    const remeStatus = event.target.checked ? "available" : "empty";
    setDataAdd({
      ...dataAdd,
      remeStatus: remeStatus,
    });
    toggleSwitch();
  };

  const handleTextAreaChange = (event: any) => {
    setDataAdd({
      ...dataAdd,
      remeDescription: event.target.value,
    });
  };

  const evenHandler = (field: any) => (event: any) => {
    setDataAdd({
      ...dataAdd,
      [field]: event.target.value,
    });
  };
  const addData = (event: any) => {
    setAdd(false);
    console.log(dataAdd);
    event.preventDefault();
    // useEffect(() => {
    dispatch(doCreateRestoMenus({ ...dataAdd, file: dataAdd.file }));
    // }, []);
  };

  //=================EDIT DATA=====================//

  const [Datas, setDatas] = useState({
    remeId: "",
    remeName: "",
    remeDescription: "",
    remePrice: "",
    remeStatus: "",
  });

  //===============Hapus Keranjang=================//

  //============SEARCH TABEL=============//

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (event: any) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredData = Data.filter((item: any) => item.remeName.includes(searchTerm));

  //==================UPLOAD PHOTOS===============//

  // const [photos, setPhotos] = useState([]);
  // console.log(photos);

  // const handlePhotosChange = (event: any) => {
  //   setPhotos(Array.from(event.target.files));
  // };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("primaryPhoto", photos[0]);

  //   photos.forEach((photo, index) => {
  //     if (index !== 0) {
  //       formData.append("photos[]", photo);
  //     }
  //   });

  //   fetch("upload", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => {
  //       // Handle successful upload
  //       return "suceed";
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       return "error";
  //     });
  // };

  // useEffect(() => {
  //   photos
  // }, []);

  return (
    <Box>
      <Head>
        <title>Resto</title>
      </Head>
      <LayoutAdmin>
        <p className='text-gray-700 text-3xl mb-16 font-bold'>Resto / Menus</p>

        <main>
          <div>
            <div className=' flex justify-end '>
              <div className='mb-3 xl:w-96'>
                <div className='input-group relative mb-4 flex w-full flex-wrap items-stretch'>
                  <input
                    type='search'
                    className='form-control relative m-0 block w-full min-w-0 flex-auto  border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
                    placeholder='Search'
                    aria-label='Search'
                    aria-describedby='button-addon2'
                    // onChange={handleSearch}
                  />
                </div>
              </div>
              <div>
                <button
                  className='btn flex items-center  bg-blue-600 px-5 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                  type='button'
                  id='button-addon2'
                >
                  <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='search' className='w-4' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='currentColor'
                      d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
              <div className='inline-block min-w-full'>
                <div className='overflow-hidden'>
                  <table className='min-w-full'>
                    <thead className='border-b bg-white'>
                      <tr>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          ID
                        </th>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          Menu&nbsp;Name
                        </th>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          Description
                        </th>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          Price
                        </th>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          Status
                        </th>
                        <th scope='col' className='px-5 py-5 text-left text-sm font-medium text-gray-900'>
                          <button onClick={() => setAdd(true)}>
                            <a className='text-green-500'>+ ADD</a>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Data &&
                        Data.map((Resto: any) => {
                          return (
                            <tr className='border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100'>
                              <td className='w-7 px-5 py-5 text-sm font-medium text-gray-900'>{Resto.remeId}</td>
                              <td className='w-40 px-5 py-5 text-sm font-light text-gray-900'>{Resto.remeName}</td>
                              <td className='w-96 px-5 py-5 text-justify text-sm font-light text-gray-900'>{Resto.remeDescription}</td>
                              <td className='whitespace-nowrap px-5 py-5 text-sm font-light text-gray-900'>{Resto.remePrice}</td>
                              <td className='whitespace-nowrap px-5 py-5 text-sm font-light text-gray-900'>{Resto.remeStatus}</td>
                              <td className='whitespace-nowrap text-sm font-light text-gray-900 px-5 py-5'>
                                <button className='' onClick={() => handleDelete(Resto.remeId)}>
                                  <svg className='w-4 hover:text-red-400' fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                    <path
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                    ></path>
                                  </svg>
                                </button>
                                <button className='ml-2 hover:text-green-400' onClick={() => handleEdit(Resto.remeId)}>
                                  <svg className='w-4' fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                    <path
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                    ></path>
                                  </svg>
                                </button>
                                <button className='ml-2 hover:text-blue-400 ' onClick={() => setOpenAddPhotos(true)}>
                                  <svg className='w-4' fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                                    <path
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                                    ></path>
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      <ul>
                        {/* {filteredData.map((item: any) => (
                          <li key={item.remeId}>{item.remeName}</li>
                        ))} */}
                      </ul>
                      {/* Edit Data */}
                      <Modal footer={null} title='Add / Edit Resto Menus' centered open={open} onCancel={() => setOpen(false)} width={700}>
                        <div className='flex gap-5'>
                          <div className='mt-3'>
                            <label htmlFor=''> Resto Menu</label> <br />
                            <input className='w-[300px] p-1 mt-1 border-gray-200 border-2 rounded text-gray-400' type='text' placeholder='Menu resto name' />
                          </div>
                          <div className='mt-3'>
                            <label htmlFor=''> Price</label> <br />
                            <input className='w-[300px] p-1 mt-1 border-gray-200 border-2 rounded text-gray-400' type='text' placeholder='Menu resto price' />
                          </div>
                        </div>
                        <div className='mt-4'>
                          <label htmlFor=''> Resto menu descriptions</label> <br />
                          <textarea className='border-gray-200 border-2 rounded w-full h-24 mt-2 p-1' name='' id='' placeholder='Enter your descriptions'></textarea>
                        </div>
                        <div className='flex mt-4 items-center'>
                          <h1>Available ?</h1>
                          <label htmlFor='toggle' className=' ml-3 flex items-center cursor-pointer'>
                            <div className='relative'>
                              <input id='toggle' type='checkbox' className='sr-only' checked={isOn} onChange={toggleSwitch} />
                              <div className='block bg-gray-200 w-10 h-6 rounded-full'></div>
                              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${isOn ? "transform translate-x-full bg-green-500" : "bg-gray-300"}`}></div>
                            </div>
                            <div className='ml-3 text-gray-700 font-medium'>{isOn ? "available" : "empty"}</div>
                          </label>
                        </div>
                        <footer className='flex justify-end gap-3 pt-5'>
                          <button className='h-8 w-24 bg-red-600 rounded text-white ' onClick={() => setOpen(false)}>
                            Cancel
                          </button>
                          <button className='h-8 w-24 bg-blue-700 rounded text-white'>Save</button>
                        </footer>
                      </Modal>
                      {/* setADD */}
                      <Modal footer={null} title='Add / Edit Resto Menus' centered open={openAdd} onOk={() => setAdd(false)} onCancel={() => setAdd(false)} width={700}>
                        <div className='flex gap-5'>
                          <div className='mt-3'>
                            <label htmlFor=''> Resto Menu</label> <br />
                            <input className='w-[300px] p-1 mt-1 border-gray-200 border-2 rounded text-gray-400' type='text' placeholder='Menu resto name' value={dataAdd.remeName} onChange={evenHandler("remeName")} />
                          </div>
                          <div className='mt-3'>
                            <label htmlFor=''> Price</label> <br />
                            <input className='w-[300px] p-1 mt-1 border-gray-200 border-2 rounded text-gray-400' type='number' placeholder='Menu resto price' value={dataAdd.remePrice} onChange={evenHandler("remePrice")} />
                          </div>
                        </div>
                        <div className='mt-4'>
                          <label htmlFor=''> Resto menu descriptions</label> <br />
                          <textarea className='border-gray-200 border-2 rounded w-full h-24 mt-2 p-1' name='' id='' placeholder='Enter your descriptions' value={dataAdd.remeDescription} onChange={handleTextAreaChange}></textarea>
                        </div>
                        <div className='flex mt-4 items-center'>
                          <h1>Available ?</h1>
                          <label htmlFor='toggle' className=' ml-3 flex items-center cursor-pointer'>
                            <div className='relative'>
                              <input id='toggle' type='checkbox' className='sr-only' checked={isOn} onChange={handleChange} value={isOn ? "available" : "empty"} />
                              <div className='block bg-gray-200 w-10 h-6 rounded-full'></div>
                              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${isOn ? "transform translate-x-full bg-green-500" : "bg-gray-300"}`}></div>
                            </div>
                            <div className='ml-3 text-gray-700 font-medium'>{isOn ? "available" : "empty"}</div>
                          </label>
                        </div>
                        <footer className='flex justify-end gap-3 pt-5'>
                          <button className='h-8 w-24 bg-red-600 rounded text-white ' onClick={() => setAdd(false)}>
                            Cancel
                          </button>
                          <button className='h-8 w-24 bg-blue-700 rounded text-white' onClick={addData}>
                            Add Data
                          </button>
                        </footer>
                      </Modal>
                      {/* UPLOAD FOTO */}
                      <Modal footer={null} centered open={addPhotos} onOk={() => setOpenAddPhotos(false)} onCancel={() => setOpenAddPhotos(false)} width={700}>
                        <div className='flex flex-col items-center justify-center'>
                          <h1 className='text-2xl font-bold mb-4'>Upload Foto</h1>
                          <form className='w-full max-w-lg mt-3'>
                            <div className='flex flex-wrap mb-6'>
                              <label htmlFor='foto1' className='block text-gray-700 font-bold mb-2'>
                                Foto 1:
                              </label>
                              <input
                                type='file'
                                name='foto1'
                                id='foto1'
                                accept='image/*'
                                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                             
                              />
                            </div>
                            <div className='flex flex-wrap mb-6'>
                              <label htmlFor='foto2' className='block text-gray-700 font-bold mb-2'>
                                Foto 2:
                              </label>
                              <input
                                type='file'
                                name='foto2'
                                id='foto2'
                                accept='image/*'
                                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              
                              />
                            </div>
                            <div className='flex flex-wrap mb-6'>
                              <label htmlFor='foto3' className='block text-gray-700 font-bold mb-2'>
                                Foto 3:
                              </label>
                              <input
                                type='file'
                                name='foto3'
                                id='foto3'
                                accept='image/*'
                                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                              
                              />
                            </div>
                            <div className='flex flex-wrap mb-6'>
                              <label htmlFor='foto4' className='block text-gray-700 font-bold mb-2'>
                                Foto 4:
                              </label>
                              <input
                                type='file'
                                name='foto4'
                                id='foto4'
                                accept='image/*'
                                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                
                              />
                            </div>
                            <footer className='flex justify-end gap-3 pt-5'>
                              <button className='h-8 w-24 bg-red-600 rounded text-white ' onClick={() => setOpenAddPhotos(false)}>
                                Cancel
                              </button>
                              <button className='h-8 w-24 bg-blue-700 rounded text-white' type='submit' >
                                Add Photos
                              </button>
                            </footer>
                          </form>
                        </div>
                      </Modal>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </LayoutAdmin>
    </Box>
  );
}
