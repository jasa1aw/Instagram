"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function UploadModal({ closeModal, onSelect }) {
  const currentUser = useSelector((state) => state.auth.currentUser)

  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setImage(url)
      setStep(2);
    }
  };
  const handleBackButtonClick = () => {
    setStep(1);
    setSelectedFile(null);
    setCaption("");
  };
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const getCaptionLength = () => {
    return caption.length;
  };
  const Save = () => {
    onSelect(selectedFile,caption)
    // console.log('image', image);
    closeModal()
  }

  return (
    <div className="modalBackground">
      <button className="button modal-btn" onClick={() => {closeModal()}}>
        <svg
          aria-label="Close"
          fill="currentColor"
          height="25"
          width="26"
        >
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
      {step == 1 && (
        <div className="modalContainer">
          <div className="title">
            <h2>Create new post</h2>
          </div>
          <div className="body">
              <div className="modalIcon">
                <svg
                  fill="currentColor"
                  height="77"
                  width="96"
                >
                  <path
                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2>Drag photos and videos here</h2>
              <button className="button button-primary select-btn">
                Select from computer
                <input type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
              </button>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="modalContainer uploadPost">
          <div className="title title2">
            <button onClick={handleBackButtonClick} className="button back-btn">
              <img className="img" src="/img/icons/arrowLeft.svg" alt="" />
            </button>
            <h2>Create new post</h2>
            <button onClick={() => Save()} type="button" className="button share-btn">
              Share
            </button>
          </div>
          <div className="block">
            <div className="block-item-img">
              <img className="img" src={image} alt="not found" />
            </div>
            <div className="block-item-author">
              <div className="author">
                <div className="userAvatar modalAvatar">
                  <img src="/img/profile/avatar.jpg" alt="" />
                </div>
                <h3>{currentUser.username}</h3>
              </div>
              <textarea className="textarea" cols="40" rows="13" placeholder="Write a caption..."  onChange={handleCaptionChange}>{caption}</textarea>
              <div className="emoji">
                <div className="emoji-img">
                  <img className="img" src="/img/icons/smile.svg" alt="" />
                </div>
                <p>{getCaptionLength()}/2,200</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
