// import { getCurrentUser } from "../../../api/FireStoreAPI";
import './index.scss';
import { useState, useMemo } from 'react';
import { getSingleStatus, getSingleUser } from '../../../api/FireStoreAPI';
import PostsCard from '../PostsCard';
import { useLocation } from 'react-router-dom';
import { HiOutlinePencil } from 'react-icons/hi'
import ProfileEdit from '../ProfileEdit';


export default function ProfileCard({ onEdit, currentUser }) {
  let location = useLocation()

  const [allStatuses, setAllStatus] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }

  }, [])

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <HiOutlinePencil className='edit-icon' onClick={onEdit} />
          {/* <button onClick={onEdit}>Edit</button> */}
        </div>

        <div className="profile-info">
          <div>

            <h3 className="userName">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name
              }
            </h3>
            {/* <p className="userEmail">{currentUser.email}</p> */}

            <p className="heading">{currentUser.headline}
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>

            <p className="location">{currentUser.location}
              {Object.values(currentProfile).length === 0
                ? `${currentUser.location}, ${currentUser.country}`
                : currentProfile?.location}
            </p>

            <a className="website"
              target="_blank"
              href={Object.values(currentProfile).length === 0
                ? `${currentUser.website}`
                : currentProfile?.website}>
              {Object.values(currentProfile).length === 0
                ? `${currentUser.website}`
                : currentProfile?.website}

            </a>


            {/* <p className="about-me">
              {Object.values(currentProfile).length === 0
                ? currentUser.aboutMe
                : currentProfile?.aboutMe}
            </p> */}


          </div>


          <div className="right-info">
            <p className='college'>
              {Object.values(currentProfile).length === 0
                ? currentUser.college
                : currentProfile?.college}
            </p>

            <p className='company'>
              {Object.values(currentProfile).length === 0
                ? currentUser.company
                : currentProfile?.company}
            </p>


          </div>
        </div>

        <p className="about-me">
          {Object.values(currentProfile).length === 0
            ? currentUser.aboutMe
            : currentProfile?.aboutMe}
        </p>

        <p className="skills">
          <span className="skill-label">Skills:</span> &nbsp;
          {Object.values(currentProfile).length === 0
            ? currentUser.skills
            : currentProfile?.skills}
        </p>


      </div>



      <div className="profile-status-main">
        {allStatuses.filter((item) => {
          return item.userEmail === localStorage.getItem("userEmail")
        }).map((posts) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <div key={posts.id}>
              <PostsCard posts={posts} />
            </div>
          )
        })}
      </div>
    </>
  )
}