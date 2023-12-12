"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faClapperboard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faHeart,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";
export default function Navbar({openModal}) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className='img' src="/img/icons/logo.svg" alt="" />
      </div>
      <ul>
        <Link href={'/home'} style={{color: "#000"}}>
          <li>
              <FontAwesomeIcon icon={faHouse} className="navIcon"/>
              Home
          </li>
        </Link>
        <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon"/>
            Search
        </li>
        <li>
            <FontAwesomeIcon icon={faCompass} className="navIcon"/>
            Explore
        </li>
        <li>
            <FontAwesomeIcon icon={faClapperboard} className="navIcon"/>
            Reels
        </li>
        <li>
            <svg
                fill="currentColor"
                height="22"
                width="22"
                className="navIcon"
            >
                <path
                d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.739"
                ></path>
                <path
                d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                fill-rule="evenodd"
                ></path>
            </svg>
            Messages
        </li>
        <li>
            <FontAwesomeIcon icon={faHeart} className="navIcon"/>
            Notification
        </li>
        <li onClick={() => {openModal()}}>
            <FontAwesomeIcon icon={faSquarePlus} className="navIcon"/>
            Create
        </li>
        <Link href={'/profile'} style={{color: "#000"}}>
          <li>
              <div className="navProfile navIcon">
                <img className="img" src="/img/profile/avatar.jpg" alt="avatar" />
              </div>
              Profile
          </li>
        </Link>
        
      </ul>
      <ul>
        <li>
            <FontAwesomeIcon icon={faThreads} className="navIcon"/>
            Threads
        </li>
        <li>
            <FontAwesomeIcon icon={faBars} className="navIcon"/>
            More
        </li>
      </ul>
    </nav>
  );
}
