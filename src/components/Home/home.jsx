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
import { getMyStories } from '@/app/store/slices/storySlice';

export default function Home ({posts, post}) {
    const dispatch = useDispatch()
    // const posts = useSelector((state) => state.post.allPosts)
    // const didMount = () =>{
    //     dispatch(getAllPosts())
    // }
    // useEffect(didMount,[])
        
    const [openDetailModal, setOpenDetailModal] = useState(false)
    const SelectedPost = (data) =>{
        // console.log('work');
        if(data){
            dispatch(getPostById(data.id))
            if(data.id) setOpenDetailModal(true)            
        }
    }
    useEffect(SelectedPost,[])
    

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
        setStoryId();
        setOpenDetailModal(false);
        setOpenModal(false)
    }

    const stories = useSelector((state) => state.story.stories)
    const didMountStory = () =>{
        dispatch(getMyStories())
    }
    useEffect(didMountStory,[])

    const [storyId, setStoryId] = useState();    
    const [storyUrl, setStoryUrl] = useState();
    const SelectedStory = (story) =>{
        setStoryId(story.id)
        setStoryUrl(story.video)
    }

    return(
        <section className='home'>
            {openDetailModal && <DetailPost closeModal={closeModal} post={post}/>}
            {openModal && <UploadModal closeModal={closeModal} onSelect={onSelect}/>}
            <div className="nav">
                <Navbar openModal={modalOpen}/>
            </div>
            <div className='main'>
            {storyId >= 1 && <DetailStory closeModal={closeModal}  storyId={storyId} storyUrl={storyUrl} />}
                <Stories stories={stories} SelectedStories={SelectedStory}/>
                <div className='mainHomeBlock'>
                    {posts && <UsersPosts posts={posts} SelectedPost={SelectedPost}/>}
                </div>
            </div>    
            <div className='aside'>
                <SuggestNavbar/>
            </div>
            
        </section>
    )
}