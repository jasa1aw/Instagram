"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import { logOut } from "@/app/store/slices/authSlice";
export default function MoreModal() {
  const dispatch = useDispatch()
  return (
    <div className="navModalContainer modalContainer">
      <div className="partOne">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGear} style={{color: "#000000",}} />
            Settings
          </li>
          <li>
            <div className="icon">
              <img className="imgFit" src="/img/icons/activity.svg" alt="" />
            </div>
            Your activity
          </li>
          <li>
            <FontAwesomeIcon icon={faBookmark} style={{color: "#000000",}} />
            Saved
          </li>
          <li>
            <div className="icon">
              <img className="imgFit"  src="/img/icons/theme.svg" alt="" />
            </div>
            Switch appearance
          </li>
          <li>
            <div className="icon">
              <img className="imgFit"  src="/img/icons/report.svg" alt="" />
            </div>
            Report a problem
          </li>
        </ul>
      </div>

      <div className="partTwo">
        <ul>
          <li>
            Switch account
          </li>
          <li onClick={() => dispatch(logOut())}>
            Log out
          </li>
        </ul>
      </div>
    </div>
  )
}
