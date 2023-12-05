'use client';
import Navbar from '../userProfile/navMenu';
import SuggestNavbar from './suggestNav';
import { useState } from 'react';
export default function Home () {
    return(
        <section className='home'>
            <Navbar/>
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