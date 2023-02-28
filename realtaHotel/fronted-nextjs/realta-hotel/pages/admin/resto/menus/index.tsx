import { doCardClientRequest } from "@/redux/Actions/Resto/reduceActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CardRestoMenusClient() {
  // penampung
  // const [Keranjang, setKeranjang]: any = useState([]);
  // console.log("sopi", Keranjang);

  // useEffect(() => {}, [Keranjang]);

  const [Keranjang, setKeranjang]: any = useState([]);
  // console.log(Keranjang);

  const tambahKeranjang = (cart: any) => {
    // Cek apakah item sudah ada di dalam keranjang
    const existingCartItem = Keranjang.find((item: any) => item.reme_name === cart.reme_name);

    if (existingCartItem) {
      // Jika item sudah ada, tambahkan kuantitasnya dan perbarui jumlah totalnya
      setKeranjang(
        Keranjang.map((item: any) =>
          item.reme_name === cart.reme_name
            ? {
                ...item,
                reme_quantity: item.reme_quantity + 1,
                // rem: item.reme_quantity + cart.reme_quantity,
                total: parseInt(item.reme_price.split(",")[0].replace(/[^0-9]/g, "")) * (item.reme_quantity + 1),
              }
            : item
        )
      );
    } else {
      // Jika item belum ada, tambahkan ke dalam keranjang
      setKeranjang([
        ...Keranjang,
        {
          ...cart,
          total: parseInt(cart.reme_price.split(",")[0].replace(/[^0-9]/g, "")),
        },
      ]);
    }
  };

  const totalHarga = Keranjang.reduce((total: number, item: any) => {
    return total + item.total;
  }, 0);

  const totalKeseluruhan = () => {
    return totalHarga + (totalHarga * 15) / 100;
  };

  const hapusKeranjang = (index: number) => {
    const newKeranjang = [...Keranjang];
    newKeranjang.splice(index, 1); // Menghapus 1 nilai dari array pada index tertentu
    setKeranjang(newKeranjang);
  };

  const [Data, setData]: any = useState([]);

  const restoMenusCard = useSelector((state: any) => state.restoCardClientReducers.restoCardClient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doCardClientRequest());
  }, []);

  useEffect(() => {
    if (restoMenusCard && restoMenusCard.results) {
      setData(restoMenusCard.results);
    }
  });

  console.log(Keranjang);

  return (
    <div className='ml-4 mr-8'>
      {/* <!--Search Bar--> */}
      <div></div>
      {/* <!-- Garis ---> */}
      <div className='border-y-2 border-gray-300 p-6'></div>
      {/* <!-- Main ---> */}
      <div className='flex'>
        {/* <!-- Konten Menu ---> */}
        <div className='grid h-auto w-[1150px] grid-cols-4'>
          {/* batas */}
          {Data &&
            Data.map((CardResto: any) => {
              return (
                <div className='card mt-3 mb-3 ml-3 h-[418px] w-56'>
                  {/* <!--Image--> */}
                  <div className='h-40 bg-orange-300'>
                    <img
                      className='h-40 w-56 object-cover'
                      src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                      alt='Gambar Menus'
                    />
                  </div>
                  <div>
                    <h1 className='mt-3 text-xl font-bold'>{CardResto.reme_name}</h1>
                    <h1 className='mt-2.5 text-base overflow-scroll h-16 scrollbar-hidden '>{CardResto.reme_description}</h1>
                    <h1 className='mt-3 text-lg font-semibold text-green-500'>{CardResto.reme_status}</h1>
                    <div className='flex items-baseline justify-between'>
                      <div>
                        <h1 className='mt-3 text-xl font-semibold'>{CardResto.reme_price}</h1>
                      </div>
                      <div>
                        <h1 className='font-lg'>Include Tax</h1>
                      </div>
                    </div>
                    <div className='w-full pt-4'>
                      <button className='h-10 w-full bg-green-600 text-white' onClick={() => tambahKeranjang(CardResto)}>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* <!-- Cart ---> */}
        <div className='card-cart mt-5 h-auto w-[400px]'>
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
          {Keranjang.map((nampilinKeranjang: any, index: number) => {
            return (
              <div key={index} className='flex items-center justify-between'>
                <div>
                  <h1 className='mt-3 text-xl font-semibold'>{nampilinKeranjang.reme_name}</h1>
                  {/* <!-- Harga --> */}
                  <h1 className='mt-1'>
                    {/* {parseInt(nampilinKeranjang.reme_price.split(",")[0].replace(/[^0-9]/g, ""))} x {nampilinKeranjang.reme_quantity} = Rp.{nampilinKeranjang.total} */}
                    Rp.{parseInt(nampilinKeranjang.reme_price.split(",")[0].replace(/[^0-9]/g, ""))} x {nampilinKeranjang.reme_quantity} = Rp.{nampilinKeranjang.total}
                  </h1>
                </div>
                <div>
                  {/* <!-- Hapus --> */}
                  <button className='flex w-full mt-4 rounded-md font-bold text-red-500' onClick={() => hapusKeranjang(index)}>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' className='h-6 w-6'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
          {/* <!--Garis--> */}
          <div className='mt-3 border-t-2 border-gray-400'></div>
          {/* <!-- subTOtal --> */}
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Subtotal :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Rp.{totalHarga}</h1>
            </div>
          </div>
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Tax :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>15%</h1>
            </div>
          </div>
          <div className='flex justify-between pt-3'>
            <div>
              <h1 className='text-lg font-semibold'>Total :</h1>
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Rp {totalKeseluruhan()}</h1>
            </div>
          </div>
          <div className='w-full pt-4'>
            <button className='h-10 w-full bg-green-600 text-white'>CREATE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
