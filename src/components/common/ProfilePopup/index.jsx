import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../../../api/FireStoreAPI"
import { onLogout } from "../../../api/AuthAPI"
import Button from "../Button"
import "./index.scss"


export default function ProfilePopup() {
  let navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])



  return (
    <div className="popup-card">
      <p className="name">{currentUser.name)</p>
      <p classname="headline"> {currentUser.headline}</p>
      <Button title="View Profile"
        onClick={() =>
          navigate('/profile', {
            state: {
              id: currentUser?.userID,
            },
          })
        } />

      <Button title="Log Out"
        onClick={onLogout} />



      {      /* <ul className="popup-options">
        <li className="popup-option" onClick={() =>
          navigate('/profile', {
            state: {
              id: currentUser?.userID,
            },
          })
        }
        >Logout</li>
        <li className="popup-option" onClick={() => onLogout()}>Logout</li>
      </ul> */}
    </div>
  )
}