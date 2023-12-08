'use client';
import Navbar from '../userProfile/navMenu';
import SuggestNavbar from './suggestNav';
import { useState } from 'react';
export default function Home () {
    const [openModal, setOpenModal] = useState(false);
    const modalOpen = () =>{
        setOpenModal(true)
    }
    return(
        <section className='home'>\
            <Navbar openModal={modalOpen}/>
            <div className='stories highlights'>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
                <div className='story highlight'>
                    <img src="" alt="" />
                    <p>username</p>
                </div>
            </div>
            <SuggestNavbar/>
        </section>
    )
}