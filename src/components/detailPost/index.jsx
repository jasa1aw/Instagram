"use client";
import { useState } from "react";
export default function DetailPost({posts, closeModal, step}) {
//   const [step, setStep] = useState(1);
  const SelectPost = step;
  console.log(SelectPost);
  return (
    <div className="modalBackground">
      <button className="button modal-btn" onClick={() => {closeModal(false);}}>
        <svg
          aria-label="Close"
          class="x1lliihq x1n2onr6 x9bdzbf"
          fill="currentColor"
          height="18"
          role="img"
          viewBox="0 0 24 24"
          width="18"
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
      </button>(
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
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
                <div className="comment">
                  <div className="user">
                      <div className="userAvatar modalAvatar">
                        <img src="/img/profile/avatar.jpg" alt="" />
                      </div>
                      <h3>Username</h3>
                      <p></p>
                    </div>
                    <button className='more-btn button'>
                      like
                    </button>
                </div>
              </div>
              <div className="inputComment">
                <div className="emoji-img">
                  <img className="img" src="/img/icons/smile.svg" alt="" />
                </div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      )
    </div>
  );
}
