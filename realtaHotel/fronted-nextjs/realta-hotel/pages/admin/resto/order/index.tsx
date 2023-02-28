export default function OrderMenu() {
  return (
    <div className='ml-10 mr-10 mt-10 flex justify-between'>
      {/* <!--Konten Kiri --> */}
      <div>
        {/* <!--Back & Complate Your Order --> */}
        <div>
          <div className='flex items-center'>
            {/* <!--Back --> */}
            <div className='h-9'>
              <button className='mt-[2.7px]'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='h-6 w-6'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
            </div>
            {/* <!--Complate your Order --> */}
            <div className='ml-4 h-9'>
              <p className='text-lg font-semibold'>Complate Your Order</p>
            </div>
          </div>
        </div>
        {/* <!-- Card Your Detail --> */}
        <div className='card mt-6 h-auto w-[850px] border-2 border-blue-600'>
          <p className='text-lg font-semibold text-black'>1. Enter Your Order</p>
          <div className='mt-3 flex items-center'>
            <div className='text-blue-600'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='h-4 w-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z' />
              </svg>
            </div>
            <div className='ml-3 text-xs text-blue-600'>We will use these details to share your booking information</div>
          </div>
          <div className='mt-6 flex gap-5'>
            <div className='w-[350px]'>
              <label className='mb-2 block text-sm font-semibold text-black' htmlFor='fullname'>
                {" "}
                Full Name{" "}
              </label>
              <input className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-blue-600' id='fullname' type='text' placeholder='Enter your fullname' />
            </div>
            <div className='w-[350px]'>
              <label className='mb-2 block text-sm font-semibold text-black' htmlFor='fullname'>
                {" "}
                Email{" "}
              </label>
              <input className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700  focus:outline-blue-600' id='fullname' type='email' placeholder='example@gmail.com' />
            </div>
          </div>
        </div>
        <div className='card mt-6 h-auto w-[850px] border-2 border-blue-600'>
          <p className='text-lg font-semibold text-black'>2. Payment</p>
          <div className='mt-3 flex items-center'>
            <div className='text-blue-600'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='h-4 w-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z' />
              </svg>
            </div>
            <div className='ml-3 text-xs text-blue-600'>please complate appropriate your data</div>
          </div>
          <div className='mt-6 flex gap-5'>
            <div className='w-[350px]'>
              <label className='mb-2 block text-sm font-semibold text-black' htmlFor='fullname'>
                {" "}
                Payment Type{" "}
              </label>
              <select className='block w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-500 focus:outline-blue-500 '>
                <option>Pay at Hotel</option>
                <option value='CR'> Credit Card </option>
                <option value='C'>Cash</option>
                <option value='D'>Debet</option>
                <option value='PG'>Payment Gateway</option>
                <option value='BO'>Bill Checkout</option>
              </select>
            </div>
            <div className='w-[350px]'>
              <label className='mb-2 block text-sm font-semibold text-black' htmlFor='fullname'>
                {" "}
                Account Payment{" "}
              </label>
              <input className=' w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700  focus:outline-blue-600' id='fullname' type='text' placeholder='Enter your account payment' />
            </div>
          </div>
        </div>
      </div>
      {/* <!--Konten Kanan --> */}
      <div className='pt-8 rounded w-auto'>
        <div className='card-cart mt-5 h-auto w-[400px] m-4 '>
          <div className='flex items-center justify-center'>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='h-6 w-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                />
              </svg>
            </div>
            <div className='ml-3 text-lg font-semibold'>Items Ordered</div>
          </div>
          <div className='mt-3 border-t-2 border-gray-400'></div>
          {/* <!-- Isi --> */}
          <div>
            <div>
              <h1 className='mt-3 text-xl font-semibold'>Sop Iga Sapi</h1>
              {/* <!-- Harga --> */}
              <div className='flex justify-between'>
                <div>
                  <h1 className='mt-3'>Rp.65.000.00 x 1 </h1>
                </div>
                <div>
                  <h1 className='mt-3'>Rp.65.000.00</h1>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Garis--> */}
          <div className='mt-3 border-t-2 border-gray-400'></div>
          {/* <!-- subTOtal --> */}
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Subtotal :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Rp.250.000.00</h1>
            </div>
          </div>
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Discount :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Rp.5.000.00</h1>
            </div>
          </div>
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Tax :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>10%</h1>
            </div>
          </div>
          <div className='mt-3 border-t-2 border-gray-400'></div>
          <div className='flex justify-between pt-4'>
            <div>
              <h1 className='text-xl font-semibold'>Total :</h1>
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Rp.287.000.00</h1>
            </div>
          </div>
          <div className='w-full pt-6'>
            <div>
              <button className='h-10 w-full bg-yellow-400 text-white font-semibold rounded'>Get Coupons</button>
            </div>
            <div className='pt-3'>
              <button className='h-10 w-full bg-green-600 text-white font-semibold rounded'>Complate Your Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
