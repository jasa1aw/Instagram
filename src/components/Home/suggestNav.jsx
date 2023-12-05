"use client";
import Footer from "../Footer/footer";
import { useState } from "react";
export default function SuggestNavbar() {
    return (
        <nav className="suggestNav navbar">
            <div className="switchBlock">
                <div className="navProfile switchItem">
                    <img className="img" src="/img/profile/avatar.jpg" alt="avatar" />
                    <p>Username</p>
                </div>
                <button className="button share-btn">Switch</button>
            </div>
            
            
        </nav>
    );
}
