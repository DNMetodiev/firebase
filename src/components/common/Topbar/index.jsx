import "./index.scss"
import user from "../../../assets/user.png"

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUserSwitch,
  AiOutlineMessage,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsBriefcase } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  let navigate = useNavigate();

  const goToRoute = (route) => {
    navigate(route)
  }


  return <div className="topbar-main">

    <div className="react-icons">
      <AiOutlineSearch size={40} className="react-icon" />
      <AiOutlineHome size={40} className="react-icon" onClick={() => goToRoute("/home")} />
      <AiOutlineUserSwitch size={40} className="react-icon" onClick={() => goToRoute("/profile")} />
      <BsBriefcase size={40} className="react-icon" />
      <AiOutlineMessage size={40} className="react-icon" />
      <AiOutlineBell size={40} className="react-icon" />

    </div>
    <img className="user-logo" src={user} alt="user" />

  </div>
}