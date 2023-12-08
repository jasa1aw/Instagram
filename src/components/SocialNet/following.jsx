"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function FollowingModal({ closeModal, following }) {
    return (
        <div className="modalBackground">
            <div className="followersContainer">
                <div className="title title3">
                    <h2>Following</h2>
                    <button className="button closeModal" onClick={()=> closeModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="search-followers-blog">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="input search-followers" type="text" placeholder="Search"/>
                </div>
                <div className="followers">
                    {following.map(following =>(
                        <div className="follower">
                            <div className="user">
                                <div className="followerAvatar">
                                    <img className="imgCircle" src={following.avatar} alt="" />
                                </div>
                                <div className="commentStatus">
                                    <h3>{following.username}</h3>
                                    <p>{following.bio}</p>
                                </div>
                            </div>
                            <button className='button'>Following</button>
                        </div>))} 
                </div>          
            </div>
        </div>
    )
}
