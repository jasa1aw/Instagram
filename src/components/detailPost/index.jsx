"use client";
import { useState } from "react";
export default function DetailPost({posts, closeModal, step}) {
  const [AllComments,SetAllComments] = useState([])
  const [delComment,setdelComment] = useState({})
  const addCommentsToPost = (item) =>{
      SetAllComments([...AllComments,item])
  }
  const Removecomment = (comment) =>{
      let Remove= [...AllComments]
      let index = AllComments.indexOf(comment)
      Remove.splice(index,1)
      SetAllComments(Remove)
  }
  const [inputvalue,Setinputvalue] = useState('')
  const save = () =>{
    const comments = {
        inputvalue
    }
    addCommentsToPost(comments)
    Setinputvalue('')
  }
  const SelectPost = step;
  return (
    <div className="modalBackground">
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
              <img className="img" src={posts[SelectPost-1].url} alt="" />
            </div>
            <div className="block-item-author">
              <div className="author">
                <div className="user">
                  <div className="userAvatar modalAvatar">
                    <img src="/img/profile/avatar.jpg" alt="" />
                  </div>
                  <h3>Username</h3>
                </div>
                <button className='more-btn button'>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                  <div className='circle-more'></div>
                </button>
              </div>
              <div className="comments">
                {AllComments.length > 0 && AllComments.map((item, index) =>(
                  <div className="comment" key={index}>
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p>{item.inputvalue}</p>
                    </div>
                    <button onClick={() => {Removecomment(setdelComment)}}>Удалить</button>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                ))}
              </div>
              <div className="addComment">
                <div className="emoji-img">
                  <img className="img" src="/img/icons/smile.svg" alt="" />
                </div>
                <input type="text" placeholder="Add comment..." onChange={(e) => Setinputvalue(e.target.value)} value={inputvalue}/>
                <button onClick={save}>Post</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
