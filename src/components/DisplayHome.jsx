import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData } from '../assets/assets'
import SongItem from './SongItem'
import { songsData } from '../assets/assets'



const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4 '>
                <h1 className='my-5 font-bold text-2xl '>Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <AlbumItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />
                    ))}
                </div>


            </div>
            <div className='mb-4 '>
                <h1 className='my-5 font-bold text-2xl '>Featured Charts</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,index)=>( <SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />))}


                </div>


            </div>


        </>
    )
}

export default DisplayHome
