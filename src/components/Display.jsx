import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbumb from './DisplayAlbumb'
import { albumsData } from '../assets/assets'

import { useNavigate } from 'react-router-dom'




const Display = () => {

  const DisplayRef = useRef()
  const location = useLocation()
  console.log(location)
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum? location.pathname.slice(-1): "";
  console.log(albumId)
  const bgColor = albumsData[Number(albumId)].bgColor
  console.log(bgColor)
  


  useEffect(()=>{
    if(isAlbum){
      DisplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
    else{
      DisplayRef.current.style.background =`#121212`
    }

  })

  return (
    <>
    <div ref={DisplayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
        
            <Route path='/' element={<DisplayHome/>}  />
            <Route path='/album/:id' element={<DisplayAlbumb/>}  />
        </Routes>
       

    </div>
      
    </>
  )
}

export default Display
