'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
import Navbar from '../userProfile/navMenu';
import SuggestNavbar from './suggestNav';
import Stories from "../Stories/stories";
import DetailStory from "../detailStory";
import UsersPosts from "../UsersPosts/usersPosts";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, getPostById } from "@/app/store/slices/postSlice";

export default function Home ({stories}) {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.allPosts)
    console.log(posts);
    const didMount = () =>{
        dispatch(getAllPosts())
    }
    useEffect(didMount,[])

    const SelectedPost = (data) =>{
        // console.log('work');
        if(data){
            dispatch(getPostById(data.id))
            console.log(data);
            setOpenDetailModal(true)
        }
    }
    useEffect(SelectedPost,[])
    const post = useSelector((state) => state.post.post)

    const [openModal, setOpenModal] = useState(false);
    const modalOpen = () =>{
        setOpenModal(true)
    }
    const closeModal = () =>{
        setSelectStory()
    }
    const [selectStory, setSelectStory] = useState();
    const SelectedStory = (id) =>{
        setSelectStory(id)
    }

    return(
        <section className='home'>\
            <Navbar openModal={modalOpen}/>
            {selectStory >= 1 && <DetailStory closeModal={closeModal} stories={stories} step={selectStory} />}
                <Stories stories={stories} SelectedStories={SelectedStory}/>
                
            <div className='mainHomeBlock'>
                <UsersPosts posts={posts} SelectedPost={SelectedPost}/>
                {/* <div className="block-item-author">
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
                </div> */}
            </div>
            <SuggestNavbar/>
        </section>
    )
}