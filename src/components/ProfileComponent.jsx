// import React from 'react';
import { useState } from 'react';
import ProfileCard from '../components/common/ProfileCard';
import ProfileEdit from '../components/common/ProfileEdit';

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  }
  return (
    <div>
      {isEdit ? (<ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />)}
    </div>
  );
}
