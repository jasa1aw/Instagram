"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
import { END_POINT } from "@/config/end_point";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from "@/app/store/slices/postSlice";
import { useRouter } from 'next/navigation';
export default function DetailPost({post, closeModal}) {
  
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.currentUser)

  const [AllComments,SetAllComments] = useState([]);
  const [DelComment,SetDelComment] = useState({});
  const [moreCommentModal,setMoreCommentModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);

  const addCommentsToPost = (item) =>{
      SetAllComments([...AllComments,item])
  }
  const Removecomment = (comment) =>{
      let Remove= [...AllComments]
      let index = AllComments.indexOf(comment)
      Remove.splice(index,1)
      SetAllComments(Remove)
  }
  const [InputValue,SetInputValue] = useState('')
  const save = () =>{
    const comments = {
      InputValue
    }
    addCommentsToPost(comments)
    SetInputValue('')
  }

  return (
    <div className="modalBackground">
      {moreCommentModal == true && <div className="removeModal">
        <div className="removeBtns">
          <button className="removeBtn button">Report</button>
          <button className="removeBtn button" onClick={() => {Removecomment(DelComment); setMoreCommentModal(false)}}>Delete</button>
          <button className="removeBtn button" onClick={() => {setMoreCommentModal(false);}}>Cancel</button>
        </div>
      </div>}
      {settingModal == true && <div className="removeModal">
        <div className="removeBtns settingBtns">
          <button className="settingBtn button" type='button' onClick={() => {dispatch(deletePost(post.id)), closeModal(false)}}>Delete</button>
          <button className="settingBtn button">Edit</button>
          <button className="settingBtn button">Hide like count</button>
          <button className="settingBtn button">Turn off commenting</button>
          <button className="settingBtn button">Go to post</button>
          <button className="settingBtn button">Share to...</button>
          <button className="settingBtn button">Copy link</button>
          <button className="settingBtn button">Embed</button>
          <button className="settingBtn button">About this account</button>
          <button className="settingBtn button" onClick={() => {setSettingModal(false);}}>Cancel</button>
        </div>
      </div>}

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
        <div className="modalContainer detailPost">
          <div className="block">
            <div className="block-item-img ">
              <img className="imgFit" src={`${END_POINT}${post.image}`} alt="" />
            </div>
            <div className="block-item-author">
              <div className="author">
                <div className="user">
                  <div className="userAvatar modalAvatar">
                    <img src="/img/profile/avatar.jpg" alt="" />
                  </div>
                  <div className="postDescription">
                    <h3>{currentUser.username}</h3>
                    <p>Original sound</p>
                  </div>
                </div>
                <button className='more-btn button' onClick={() => {setSettingModal(true);}}>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                </button>
              </div>
              <div className="comments">
                <div className="comment">
                      <div className="user">
                        <div className="userAvatar modalAvatar">
                          <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                        </div>
                        <div className="commentStatus">
                          <div className="userAndCom">
                            <h3>{currentUser.username}</h3>
                            <p>{post.description}</p>
                          </div>
                          <div className="statsOfCom">
                            <span className="sentDay">37w</span>                          
                          </div>
                        </div>
                      </div>
                  </div>
              {AllComments.length == 0 && <div className="noComments">
                  <h3>No comments yet.</h3>
                  <p>Start the conversation.</p>
                </div>}
                {AllComments.length > 0 && AllComments.map((item, index) =>(
                  <div className="comment" key={index}>
                    <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <div className="commentStatus">
                        <div className="userAndCom">
                          <h3>{currentUser.username}</h3>
                          <p>{item.InputValue}</p>
                        </div>
                        <div className="statsOfCom">
                          <span className="sentDay">37w</span>
                          <span className="reply">Reply</span>
                          <button className='more-btn button removeCom' onClick={() => {SetDelComment(item); setMoreCommentModal(true)}}>
                            <div className='circle-more'></div>
                            <div className='circle-more'></div>
                            <div className='circle-more'></div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className='more-btn button'>
                      <FontAwesomeIcon icon={faHeart} className="likeBtn"/>
                    </button>
                </div>
                ))}
              </div>
              <div className="boostBlog">
                  <h3>View insights</h3>
                  <button className="button button-primary">Boost post</button>
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
                <div className="emoji-img">
                  <img className="img" src="/img/icons/smile.svg" alt="" />
                </div>
                <input className="input addCommentInput" type="text" placeholder="Add comment..." onChange={(e) => SetInputValue(e.target.value)} value={InputValue}/>
                {InputValue.length >0 && <button className="button postCommentBtn" onClick={save}>Post</button>} 
                {InputValue.length ==0 && <button className="button postCommentBtnWithoutColor">Post</button>}
                {/* {inputvalue.length >1 && <button className="Add-comment-to-post" onClick={save}>Post</button>}
                {inputvalue.length ==0 && <button className="Add-comment-to-post withoutcolor">Post</button>} */}
                
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
