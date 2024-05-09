import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate =useNavigate()
  return (
    <>
    <div className=" Sidebar w-[25%] h-full p-2 flex-col text-white gap-2 hidden lg:flex">
        <div className="Sidebar-cont bg-[#121212] h-[15%] rounded flex flex-col justify-around "> 
            <div onClick={()=> navigate('/')} className="Upper-block flex items-center gap-3 pl-8 cursor-pointer">
                <img className='w-6' src={assets.home_icon} alt="" />
                <p  className='font-bold'>Home</p>
            </div>
            <div className="First-block flex items-center gap-3 pl-8 cursor-pointer">
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className=" Lower-Block bg-[#121212] h-[85%] rounded">
            <div className="p4 flex items-center justify-between ">
                <div className="flex items-center gap-3">
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold '>Your Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={assets.arrow_icon} alt="" className="w-5" />
                    <img src={assets.plus_icon} alt="" className="w-5" />
                </div>
            </div>
            <div className="p-4 mt-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                <h1 className=''>Create Your First PlayList</h1>
                <p className="font-light">It's easy we will help you</p>
                <button className='px-4  mt-4 py-1.5 bg-white text-[15px] text-black rounded-full'>Create Playlist</button>


            </div>
            <div className="p-4 mt-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                <h1 className=''>Lets Find Some Podcasts To Follow</h1>
                <p className="font-light">We'll keep you update on new updates</p>
                <button className='px-4 py-1.5 mt-4 bg-white text-[15px] text-black rounded-full'>Browse Podcasts</button>


            </div>




        </div>

    </div>
      
    </>
  )
}

export default Sidebar
