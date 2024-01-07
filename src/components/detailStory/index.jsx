'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane, faCircleStop, faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import {faVolumeHigh, faPlay, faXmark, faHeart} from "@fortawesome/free-solid-svg-icons";
import { END_POINT } from "@/config/end_point"
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState, useEffect} from "react";
import { deleteStory } from "@/app/store/slices/storySlice";
import { getLikesOfStories, addLikeToStory, removeLikeStory } from "@/app/store/slices/likeSlice";


export default function DetailStory({closeModal, storyId, storyUrl}){
    const currentUser = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch()
    
    const [isVideo, setIsVideo] = useState(false);
    const [play, setPlay] = useState(false);
    const [settingModal, setSettingModal] = useState(false);


    const ref = useRef()
    useEffect(() => {
        let fileExtension = storyUrl.split('.').pop();
        if (fileExtension.toLowerCase() === 'mp4') {
            setIsVideo(true)
        } else {
            setIsVideo(false)
        }
    },[])

        
    const handleTogglePlay = () => {
        if (ref.current.paused) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
        setPlay(!play);
    }

    const likes = useSelector((state) => state.like.likes);
  // console.log(likes);
    useEffect(() => {
        const didMount = async () => {
        dispatch(getLikesOfStories(storyId));
        };
        didMount();
    }, [dispatch, storyId]);

    let [liked, setLiked] = useState([]);

    useEffect(() => {
        liked = likes.filter(item => item.userId === currentUser.id )
        if(liked.length){
        setLiked(liked)
        }
    },[likes])

    const removeLike = (data) =>{
        if(data[0].userId == currentUser.id){
        dispatch(removeLikeStory(data[0].id, storyId))
        setLiked([])
        }
    }

    return(
        <div className="modalBackground storyBack" >
            {settingModal && <div className="removeModal">
                <div className="removeBtns">
                    <button className="removeBtn button" type='button' onClick={() => {setSettingModal(false)}}>Report</button>
                    <button className="removeBtn button" type='button' onClick={() => {dispatch(deleteStory(storyId)), closeModal(false)}}>Delete</button>
                    <button className="removeBtn button" onClick={() => {setSettingModal(false);}}>Cancel</button>
                </div>
            </div>}
            <button className="button modal-btn" onClick={() => {closeModal(false);}}>
                <FontAwesomeIcon icon={faXmark} style={{color: "#000000", fontSize: "25px"}} />
            </button>
            <div className="block-item-author storyModalItem">
                    <div className="MainPost author storyHeader">
                        <div className="user ">
                            <div className="userAvatar modalAvatar">
                                <img className="img" src="/img/profile/avatar.jpg" alt="" />
                            </div>
                            <div className="postDescription">
                                <h3>{currentUser.username}</h3>
                                <p>Original sound</p>
                            </div>
                        </div>
                        <div className="modalIcon">
                            <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#fff"}}/>
                            {play && isVideo  && <FontAwesomeIcon icon={faPlay} style={{color: "#fff"}} onClick={() => {setPlay(false);handleTogglePlay()}} />}
                            {!play && isVideo  && <FontAwesomeIcon icon={faCircleStop} style={{color: "#fff"}} onClick={() => {setPlay(true);handleTogglePlay()} } />}
                            {/* <FontAwesomeIcon icon={faPlay} style={{color: "#fff"}} /> */}
                            <button className='more-btn button' onClick={() => {setSettingModal(true);}}>
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                            </button>
                        </div>
                        
                    </div>
                    <div className="block-item-img storyitemImg"> 
                        {!isVideo && <img className="imgFit" src={`${END_POINT}${storyUrl}`} alt="" />}
                        {isVideo && <video ref={ref} className="video imgFit" src={`${END_POINT}${storyUrl}`} alt="not found" autoPlay></video>}
                    </div>
                    
                    <div className="addComment replyStory">
                        <input className="input replyStoryInput" type="text" placeholder={`Reply to ${currentUser.username}`} />
                        {liked.length == 0 && (
                            <FontAwesomeIcon icon={farHeart} className="socialFuncIcon" onClick={() => {dispatch(addLikeToStory(storyId));}}/>
                        )}
                        {liked.length >= 1 && (
                            <FontAwesomeIcon icon={faHeart}  className="socialFuncIcon liked" onClick={() => { removeLike(likes);}}/>
                        )}
                        <FontAwesomeIcon icon={faPaperPlane} className="socialFuncIcon" style={{color: "#fff"}}/>
                    </div>
                </div>
        </div>
    )
}