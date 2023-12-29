'use client';
import Posts from '../Posts/posts';
import UploadModal from '@/components/uploadImageModal/modal'
import DetailPost from '../detailPost';
import Navbar from './navMenu';
import FollowersModal from '../SocialNet/followers';
import FollowingModal from '../SocialNet/following';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyPosts , CreatePost, getPostById} from '@/app/store/slices/postSlice';
export default function UserProfile ({user,followers,following}) {
    const [openDetailModal, setOpenDetailModal] = useState(false)

    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.currentUser)
    const posts = useSelector((state) => state.post.posts)
    // console.log(posts);
    const didMount = () =>{
        dispatch(getMyPosts())
    }
    useEffect(didMount,[])
    // console.log(posts);
    const onSelect = (image,description) => {
        const form = new FormData();
        form.append('image', image);
        form.append('description', description)
        dispatch(CreatePost(form))
        console.log(`form: ${form}`);
    }

    const [openModal, setOpenModal] = useState(false);
    const [OpenFollowersModal, SetOpenFollowersModal] = useState(false);
    const [OpenFollowingModal, SetOpenFollowingModal] = useState(false)
    
    const SelectedPost = (data) =>{
        // console.log('work');
        if(data){
            dispatch(getPostById(data.id))
            console.log(data);
            setOpenDetailModal(true)
        }
    }
    useEffect(SelectedPost,[])

    const closeModal = () =>{
        setOpenModal(false)
        SetOpenFollowersModal(false)
        SetOpenFollowingModal(false)
        setOpenDetailModal(false)
    }
    const modalOpen = () =>{
        setOpenModal(true) 
    }
    const post = useSelector((state) => state.post.post)
    // console.log(post);
    

    return(
        <section className='profile'>
            <div className="nav">
                <Navbar openModal={modalOpen}/>
            </div>
            {openModal && <UploadModal closeModal={closeModal} onSelect={onSelect}/>}
            {openDetailModal && <DetailPost closeModal={closeModal} post={post}  />}
            {OpenFollowersModal && <FollowersModal closeModal={closeModal} followers={followers}/>}
            {OpenFollowingModal && <FollowingModal closeModal={closeModal} following={following}/>}
            <div className="mainProfile">
                <div className='userInfo'>
                    <div className='userAvatar'>
                        <img src={user.avatar} alt="avatar" />
                    </div>
                    <div className='userAbout'>
                        <div className='username'>
                            <h3>{currentUser.full_name}</h3>
                            <button className='follow-btn button button-primary'>Follow</button>
                            <button className='message-btn button'>Message</button>
                            <button className='addUser-btn button'>
                                <img src="/img/icons/addUser.svg" alt="" />
                            </button>
                            <button className='more-btn button' >
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                            </button>
                        </div>
                        <div className='contentAbout'>
                            <p>{posts.length} post</p>
                            <p onClick={() => SetOpenFollowersModal(true)}>{user.stats.followers} followers</p>
                            <p onClick={() => SetOpenFollowingModal(true)}>{user.stats.following} following</p>
                        </div>
                        <div className='bio'>
                            <h2>{currentUser.username}</h2>
                        </div>
                    </div>
                </div>
                <div className='highlights'>
                    <div className='highlight'>
                        <img src="" alt="" />
                        <p>Highlight</p>
                    </div>
                    <div className='highlight'>
                        <img src="" alt="" />
                        <p>Highlight</p>
                    </div>
                </div>
                <div className="posts">
                    <hr className="line"/>
                    <div className='posts-icon-line'></div>
                    <div className="posts-icon">
                        <img src="/img/icons/postIcon.svg" alt="" />
                        <h3>POSTS</h3>
                    </div>
                    {post && <Posts posts={posts} SelectedPost={SelectedPost}/>}
                </div>
            </div>
        </section>
    )
}