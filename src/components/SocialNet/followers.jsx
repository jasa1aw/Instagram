"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function FollowersModal({ closeModal, followers }) {
    return (
        <div className="modalBackground">
            <div className="followersContainer">
                <div className="title title3">
                    <h2>Followers</h2>
                    <button className="button closeModal" onClick={()=> closeModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="search-followers-blog">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="input search-followers" type="text" placeholder="Search"/>
                </div>
                <div className="followers">
                    {followers.map(follower =>(
                        <div className="follower">
                            <div className="user">
                                <div className="followerAvatar">
                                    <img className="imgCircle" src={follower.avatar} alt="" />
                                </div>
                                <div className="commentStatus">
                                    <h3>{follower.username}</h3>
                                    <p>{follower.bio}</p>
                                </div>
                            </div>
                            <button className='button'>Remove</button>
                        </div>))} 
                </div>          
            </div>
        </div>
    )
}
