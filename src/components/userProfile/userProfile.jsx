'use client';
import Posts from '../Posts/posts';
import UploadModal from '@/components/uploadImageModal/modal'
import DetailPost from '../detailPost';
import { useState } from 'react';
export default function UserProfile ({user,posts}) {
    const [openModal, setOpenModal] = useState(false)
    const [selectImg, setSelectImg] = useState()
    const SelectedPost = (id) =>{
        setSelectImg(id)
    }
    const closeModal = () =>{
        setOpenModal(false)
        setSelectImg()
    }
    return(
        <section className='profile'>
            {openModal && <UploadModal closeModal={closeModal}/>}
            {selectImg >= 1 && <DetailPost closeModal={closeModal} posts={posts} step={selectImg} />}
            <div className='userInfo'>
                <div className='userAvatar'>
                    <img src={user.avatar} alt="avatar" />
                </div>
                <div className='userAbout'>
                    <div className='username'>
                        <h3>{user.username}</h3>
                        <button className='follow-btn button button-primary'>Follow</button>
                        <button className='message-btn button'>Message</button>
                        <button className='addUser-btn button'>
                            <img src="/img/icons/addUser.svg" alt="" />
                        </button>
                        <button className='more-btn button'>
                            <div className='circle-more'></div>
                            <div className='circle-more'></div>
                            <div className='circle-more'></div>
                        </button>
                    </div>
                    <div className='contentAbout'>
                        <p>{user.stats.posts} post</p>
                        <p>{user.stats.followers} followers</p>
                        <p>{user.stats.following} following</p>
                    </div>
                    <div className='bio'>
                        <h2>{user.bio}</h2>
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
            <div className="posts container">
                <hr className="line"/>
                <div className='posts-icon-line'></div>
                <div className="posts-icon">
                    <img src="/img/icons/postIcon.svg" alt="" />
                    <h3>POSTS</h3>
                </div>
                <Posts posts={posts} SelectedPosts={SelectedPost}/>
            </div>
            <button onClick={() => {setOpenModal(true);}}>Open</button>
        </section>
    )
}