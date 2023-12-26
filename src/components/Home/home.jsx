'use client';
import Navbar from '../userProfile/navMenu';
import SuggestNavbar from './suggestNav';
import Stories from "../Stories/stories";
import DetailStory from "../detailStory";
import UsersPosts from "../UsersPosts/usersPosts";
import DetailPost from '../detailPost';
import UploadModal from '../uploadImageModal/modal';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, getPostById, CreatePost } from "@/app/store/slices/postSlice";

export default function Home ({stories}) {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.allPosts)
    console.log(posts);
    const didMount = () =>{
        dispatch(getAllPosts())
    }
    useEffect(didMount,[])
        
    const [openDetailModal, setOpenDetailModal] = useState(false)
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
    console.log(post);

    const [openModal, setOpenModal] = useState(false);

    const onSelect = (image,description) => {
        const form = new FormData();
        form.append('image', image);
        form.append('description', description)
        dispatch(CreatePost(form))
        console.log(`form: ${form}`);
    }

    const modalOpen = () =>{
        setOpenModal(true)
    }
    const closeModal = () =>{
        setSelectStory();
        setOpenDetailModal(false);
        setOpenModal(false)
    }
    const [selectStory, setSelectStory] = useState();
    const SelectedStory = (id) =>{
        setSelectStory(id)
    }



    return(
        <section className='home'>
            {openDetailModal && <DetailPost closeModal={closeModal} post={post}/>}
            {openModal && <UploadModal closeModal={closeModal} onSelect={onSelect}/>}
            <div className="nav">
                <Navbar openModal={modalOpen}/>
            </div>
            <div className='main'>
            {selectStory >= 1 && <DetailStory closeModal={closeModal} stories={stories} step={selectStory} />}
                <Stories stories={stories} SelectedStories={SelectedStory}/>
                <div className='mainHomeBlock'>
                    <UsersPosts posts={posts} SelectedPost={SelectedPost}/>
                </div>
            </div>    
            <div className='aside'>
                <SuggestNavbar/>
            </div>
            
        </section>
    )
}