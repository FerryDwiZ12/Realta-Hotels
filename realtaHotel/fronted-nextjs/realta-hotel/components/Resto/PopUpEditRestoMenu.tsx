import { useState } from "react";
// import

export default function PopUpEditRestoMenu() {
  const [isOn, setIsOn] = useState(false);

  const [popUpEdit, setPopUpEdit] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='fixed ml-[1000px] z-10 flex w-full justify-center '>
      <div className='card h-[412px] w-[710px] drop-shadow-2xl mr-[2550px] -mt-60  origin-center'>
        <div className='flex justify-between w-full'>
          <div>
            <h1 className='text-lg font-semibold'>Add / Edit Resto Menu</h1>
          </div>
          <div>
            {popUpEdit && (
              <button className='w-6 ' onClick={() => setPopUpEdit(false)}>
                <svg fill='none' stroke='currentColor' stroke-width='3.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className='mt-7 flex gap-5'>
          <div>
            <label htmlFor='menu'>Resto Menu</label> <br />
            <input
              type='text'
              className='form-control m-0 mt-3 block w-80 min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
              placeholder='New Resto Menu'
            />
          </div>
          <div>
            <label> Price </label> <br />
            <input
              type='text'
              className='form-control relative m-0 mt-3 block w-80 min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
              placeholder='New Resto Price'
            />
          </div>
        </div>
        <div className='mt-5'>
          <label htmlFor='menu'>Descriptions</label> <br />
          <textarea className='mt-3 w-full rounded-md border px-4 py-2 focus:border-blue-500' placeholder='Enter your text'></textarea>
        </div>
        <div className='flex items-center mt-3'>
          <h1>Available ?</h1>
          <label htmlFor='toggle' className=' ml-3 flex items-center cursor-pointer'>
            <div className='relative'>
              <input id='toggle' type='checkbox' className='sr-only' checked={isOn} onChange={toggleSwitch} />
              <div className='block bg-gray-200 w-14 h-8 rounded-full'></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isOn ? "transform translate-x-full bg-green-500" : "bg-gray-300"}`}></div>
            </div>
            <div className='ml-3 text-gray-700 font-medium'>{isOn ? "available" : "empty"}</div>
          </label>
        </div>
      </div>
    </div>
  );
}
