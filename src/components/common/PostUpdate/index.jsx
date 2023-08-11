import { postStatus, getStatus } from '../../../api/FireStoreAPI';
import { useState, useMemo } from 'react';
import "./index.scss"
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import ModalComponent from "../Modal"
import { getUniqueId } from '../../../helpers/getUniqueId';
import PostsCard from '../PostsCard';

// eslint-disable-next-line react/prop-types
export default function PostStatus({ currentUser }) {
  console.log(getUniqueId())
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("")
  const [allStatuses, setAllStatuses] = useState([])
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueId(),
    }

    await postStatus(object)
    await setModalOpen(false)
    await setStatus("")
  }
  console.log(getCurrentTimeStamp("LLL"))

  useMemo(() => {
    getStatus(setAllStatuses)
  }, [])


  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>Start a post</button>
      </div>
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sendStatus={sendStatus}
      />

      <div>
        {allStatuses.map((posts) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <div key={posts.id}>
              <PostsCard posts={posts} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
