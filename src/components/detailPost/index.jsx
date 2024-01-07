"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart, faComment, faPaperPlane, faBookmark} from "@fortawesome/free-regular-svg-icons";
import { END_POINT } from "@/config/end_point";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from "@/app/store/slices/postSlice";
import { getMyComments, CreateComment, deleteComment} from "@/app/store/slices/commentSlice";
import { getLikesOfPost, addLikeToPost, addLikeToComment ,deletedLike, removeLikeComment} from "@/app/store/slices/likeSlice";
import { formatDistanceToNow } from 'date-fns';
import EditPost from "./editPost/editpost";

export default function DetailPost({post, closeModal}) {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.currentUser);
  const comments = useSelector((state) => state.comment.comments);
  const likes = useSelector((state) => state.like.likes);
  // console.log(likes);
  
  useEffect(() => {
    const didMount = async () => {
      dispatch(getMyComments(post.id));
      dispatch(getLikesOfPost(post.id));
    };

    didMount();
  }, [dispatch, post.id]);
  

  const [DelComment,SetDelComment] = useState({});
  const [moreCommentModal,setMoreCommentModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);
  let [liked, setLiked] = useState([]);
  const [likedCom, setLikedCom] = useState(false);

  useEffect(() => {
    liked = likes.filter(item => item.userId === currentUser.id )
    if(liked.length){
      setLiked(liked)
    }
  },[likes])

  const toggleLikedCom = () => {
    setLikedCom(!likedCom);
  };

  const removeLike = (data) =>{
    if(data[0].userId == currentUser.id){
      dispatch(deletedLike(data[0].id, post.id))
      setLiked([])
    }
  }
  
  const [InputValue,SetInputValue] = useState('')
  const save = () =>{
    dispatch(CreateComment({
      description: InputValue,
      postId: post.id
    }))
    SetInputValue('')
  }
  const CloseEdit = () => {
    setOpenEditPost(false)
  }
  
  const removeCommentLike = (id) =>{
    dispatch(removeLikeComment(id, post.id))
  }

  

  return (
    <div className="modalBackground">
      {openEditPost && <EditPost closeModal={closeModal} post={post} CloseEdit={CloseEdit}/>}
      {moreCommentModal && <div className="removeModal">
        <div className="removeBtns">
          <button className="removeBtn button">Report</button>
          <button className="removeBtn button" onClick={() => {
            dispatch(deleteComment(DelComment, post.id)) 
            setMoreCommentModal(false)}}>
              Delete
          </button>
          <button className="removeBtn button" onClick={() => {setMoreCommentModal(false);}}>Cancel</button>
        </div>
      </div>}
      {settingModal && post.User.username == currentUser.username && <div className="removeModal">
        <div className="removeBtns settingBtns">
          <button className="settingBtn button" type='button' onClick={() => {dispatch(deletePost(post.id)), closeModal(false)}}>Delete</button>
          <button className="settingBtn button" onClick={() => {setOpenEditPost(true); setSettingModal(false)}}>Edit</button>
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
      {settingModal == true && post.User.username!==currentUser.username && <div className="removeModal">
        <div className="removeBtns settingBtns withoutUserSettingBtns">
          <button className="settingBtn button" type='button' onClick={() => {closeModal(false)}}>Report</button>
          <button className="settingBtn button">Go to post</button>
          <button className="settingBtn button">Share to...</button>
          <button className="settingBtn button">Copy link</button>
          <button className="settingBtn button">Embed</button>
          <button className="settingBtn button">About this account</button>
          <button className="settingBtn button" onClick={() => {setSettingModal(false);}}>Cancel</button>
        </div>
      </div>}

      <button className="button modal-btn" onClick={() => {closeModal(false);}}>
        <FontAwesomeIcon icon={faXmark} style={{color: "#000000", fontSize: "25px"}} />
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
                  <div className="postHeader">
                    {post && post.User && <h3>{post.User.username}</h3>}
                    <p>Original sound</p>
                  </div>
                </div>
                <button className='more-btn button' onClick={() => {setSettingModal(true);}}>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                </button>
              </div>
              <div className="comments postdDescription">
              {post.description  && <div className="comment">
                      <div className="user">
                        <div className="userAvatar modalAvatar">
                          <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                        </div>
                        <div className="commentStatus">
                          <div className="userAndCom">
                            {post && post.User && <h3>{post.User.username}</h3>}
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </div>
                  </div>}
              {comments.length == 0 && post.description == 0 && <div className="noComments">
                  <h3>No comments yet.</h3>
                  <p>Start the conversation.</p>
                </div>}
                {comments.length > 0 && comments.map((item, index) =>{
                  const sentTime = formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true })
                  const ShowCommentLikeUser = item.Likes.filter(likes => likes.userId === currentUser.id)            
                  return(
                    <div className="comment" key={index}>
                      <div className="user">
                        <div className="userAvatar modalAvatar">
                          <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                        </div>
                        <div className="commentStatus">
                          <div className="userAndCom">
                          {item && item.User && <h3>{item.User.username}</h3>}
                          <p>{item.description}</p>
                          </div>
                          <div className="statsOfCom">
                            <span className="sentDay">{sentTime}</span>
                            {item.Likes.length > 0 && <span className="reply">{item.Likes.length} like</span> } 
                            <span className="reply">Reply</span>
                            <button className='more-btn button removeCom' onClick={() => {SetDelComment(item.id); setMoreCommentModal(true)}}>
                              <div className='circle-more'></div>
                              <div className='circle-more'></div>
                              <div className='circle-more'></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className='more-btn button'>
                        {ShowCommentLikeUser.length === 0 && ( 
                          <FontAwesomeIcon icon={farHeart} className="likeBtn" onClick={() => {dispatch(addLikeToComment(item.id));}}/>
                        )}
                        {ShowCommentLikeUser.length >= 1 && (
                          <FontAwesomeIcon icon={faHeart}  className="liked" onClick={() => { removeCommentLike(item.Likes[0].id, item.id); }}/>
                        )}
                      </button>
                  </div>)
                  })}
              </div>
              {post && post.User && post.User.username == currentUser.username && <div className="boostBlog">
                  <h3>View insights</h3>
                  <button className="button button-primary">Boost post</button>
              </div>}
              <div className="socialInteraction">
                  <div className="socialFunc">
                    <div className="socialFuncLeft">
                      {liked.length == 0 && (
                        <FontAwesomeIcon icon={farHeart} className="socialFuncIcon" onClick={() => {dispatch(addLikeToPost(post.id));}}/>
                      )}
                      {liked.length >= 1 && (
                        <FontAwesomeIcon icon={faHeart}  className="socialFuncIcon liked" onClick={() => { removeLike(likes);}}/>
                      )}
                      <FontAwesomeIcon icon={faComment} className="socialFuncIcon"/>
                      <FontAwesomeIcon icon={faPaperPlane} className="socialFuncIcon"/>
                    </div>
                    <FontAwesomeIcon icon={faBookmark} className="socialFuncIcon"/>
                  </div>
                  <div className="likedBy">
                    {post.Likes.length > 1 && 
                      <div className="likedByAvatar">
                        <img className="imgCircle" src="/img/profile/avatar.jpg" alt="" />
                      </div>
                    }
                    {liked.length >= 1 && post.Likes.length > 1 &&
                      <span className="usersLiked">Liked by <b>{currentUser.username}</b> and <b>{post.Likes.length - 1} others</b> </span>
                    }
                  </div>
                  <span className="postDay">December 5</span> 
              </div>     
              <div className="addComment">
                <div className="emoji-img">
                  <img className="img" src="/img/icons/smile.svg" alt="" />
                </div>
                <input className="input addCommentInput" type="text" placeholder="Add comment..." onChange={(e) => SetInputValue(e.target.value)} value={InputValue}/>
                {InputValue.length > 0 && <button className="button postCommentBtn" onClick={save}>Post</button>} 
                {InputValue.length == 0 && <button className="button postCommentBtnWithoutColor">Post</button>}                
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
