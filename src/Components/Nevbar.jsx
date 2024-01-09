
import { IoClose, IoMenuSharp, IoSearch } from "react-icons/io5"
import { FaAcquisitionsIncorporated, FaShopify, FaUserFriends } from "react-icons/fa";
import { TbClover, TbFileAlert, TbHelp, TbTruckDelivery, TbWallet } from "react-icons/tb";
import { useState } from "react";

const Nevbar = () => {

  const [nav,setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left side */}
            <div className="flex items-center">
                <div onClick={()=> setNav(!nav)} className="cursor-pointer">
            <IoMenuSharp size={30} />
                </div>
            <h1 className="lg:text-4xl sm:text-3xl text-2xl md:text-3xl  px-2">Foodi <span className="font-bold">Api</span></h1>
            <div className="lg:flex items-center hidden p-1 bg-gray-200 rounded-full text-sm">
                <p className="bg-black rounded-full text-white p-2">Delivery</p>
                <p className="p-2">Pickup</p>
            </div>
            </div>

            {/* Search input */}

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
              <IoSearch size={20} />
              <input className="bg-transparent p-2 focus:outline-none" type="text"  placeholder="Search Food"/>
            </div>


            {/* Card button */}
            <button className=" rounded-full bg-black text-white hidden md:flex items-center py-2 px-4">
              <FaShopify size={20} className=" mr-2"/>
              Cart
            </button>

            {/* MObile menu */}
            {/* Overlay */}
            {
              nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">

              </div> : ""
            }
            
            {/* side drawer menu  */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 " }>
              <IoClose onClick={()=>setNav(!nav)} size={30} className="absolute top-4 right-4 cursor-pointer" />
              <h2 className="text-2xl  p-4">Food <span className="font-bold">Appi</span></h2>
              <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                  <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4"/> Orders</li>
                  <li className="text-xl py-4 flex"><TbClover size={25} className="mr-4"/> Favourites</li>
                  <li className="text-xl py-4 flex"><TbWallet size={25} className="mr-4"/> Wallet</li>
                  <li className="text-xl py-4 flex"><TbHelp size={25} className="mr-4"/> Help</li>
                  <li className="text-xl py-4 flex"><TbFileAlert size={25} className="mr-4"/>Promotion</li>
                  <li className="text-xl py-4 flex"><FaAcquisitionsIncorporated size={25} className="mr-4"/> Best Ones</li>
                  <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4"/> Invite Friends</li>
                  
                </ul>
              </nav>
            </div>
    </div>
  )
}

export default Nevbar