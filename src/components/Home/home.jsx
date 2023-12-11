'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
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
            <div className='mainHomeBlock'>

                <div className="block-item-author">
                    <div className="MainPost author">
                        <div className="user">
                        <div className="userAvatar modalAvatar">
                            <img src="/img/profile/avatar.jpg" alt="" />
                        </div>
                        <div className="postDescription">
                            <h3>Username</h3>
                            <p>Original sound</p>
                        </div>
                        </div>
                        <button className='more-btn button'>
                        <div className='circle-more'></div>
                        <div className='circle-more'></div>
                        <div className='circle-more'></div>
                        </button>
                    </div>
                    <div className="block-item-img HomeItemImg">
                        <img className="img" src='/img/profile/posts/post1.svg' alt="" />
                    </div>
                    <div className="socialInteraction">
                        <div className="socialFunc">
                            <div className="socialFuncLeft">
                            <FontAwesomeIcon icon={faHeart} className="socialFuncIcon"/>
                            <FontAwesomeIcon icon={faComment} className="socialFuncIcon"/>
                            <FontAwesomeIcon icon={faPaperPlane} className="socialFuncIcon"/>
                            </div>
                            <FontAwesomeIcon icon={faBookmark} className="socialFuncIcon"/>
                        </div>
                        <div className="likedBy">
                            <div className="likedByAvatar">
                            <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                            </div>
                            <span className="usersLiked">Liked by <b>deennqq</b> and <b>17 others</b></span>
                        </div>
                        <span className="postDay">December 5</span> 
                    </div>
                    <div className="addComment">
                        <input className="input addCommentInput" type="text" placeholder="Add comment..." />
                        <div className="emoji-img">
                            <img className="img" src="/img/icons/smile.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <SuggestNavbar/>
        </section>
    )
}