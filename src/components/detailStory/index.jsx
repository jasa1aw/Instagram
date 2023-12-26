'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faVolumeXmark, faPlay} from "@fortawesome/free-solid-svg-icons";
export default function DetailStory({stories, closeModal, step}){
    const SelectStory = step;
    return(
        <div className="modalBackground storyBack" onClick={() => {closeModal(false);}}>
        <button className="button modal-btn" onClick={() => {closeModal(false);}}>
            <svg
            fill="currentColor"
            height="25"
            width="26"
            >
            <title>Close</title>
            <polyline
                fill="none"
                points="20.643 3.357 12 12 3.353 20.647"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
            ></polyline>
            <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                x1="20.649"
                x2="3.354"
                y1="20.649"
                y2="3.354"
            ></line>
            </svg>
        </button>
            <div className="block-item-author storyModalItem">
                    <div className="MainPost author storyHeader">
                        <div className="user ">
                            <div className="userAvatar modalAvatar">
                                <img className="img" src={stories[SelectStory-1].url} alt="" />
                            </div>
                            <div className="postDescription">
                                <h3>Username</h3>
                                <p>Original sound</p>
                            </div>
                        </div>
                        <div className="modalIcon">
                            <FontAwesomeIcon icon={faVolumeXmark} style={{color: "#fff"}}/>
                            <FontAwesomeIcon icon={faPlay} style={{color: "#fff"}} />
                            <button className='more-btn button'>
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                                <div className='circle-more'></div>
                            </button>
                        </div>
                        
                    </div>
                    <div className="block-item-img storyitemImg"> 
                        <img className="img" src={stories[SelectStory-1].url} alt="" />
                    </div>
                    
                    <div className="addComment replyStory">
                        <input className="input replyStoryInput" type="text" placeholder="Reply to username" />
                        <FontAwesomeIcon icon={faHeart} className="socialFuncIcon" style={{color: "#fff"}}/>
                        <FontAwesomeIcon icon={faPaperPlane} className="socialFuncIcon" style={{color: "#fff"}}/>
                    </div>
                </div>
        </div>
    )
}