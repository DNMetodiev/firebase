// import React from 'react';
import { useState } from 'react';
import { editProfile } from '../../../api/FireStoreAPI';
import { AiOutlineClose } from 'react-icons/ai';
import './index.scss';

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInput, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInput, ...input });
  }

  const updateProfileData = async () => {
    await editProfile(currentUser?.userID, editInput);
    await onEdit();
  }

  console.log(editInput);

  return (
    <div className="profile-card">
      <div className="edit-btn">
        {/* <button onClick={onEdit}>Go back</button> */}
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
        <label>First Name</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Name"
          name="name"
          value={editInput.name}
        />

        <label>Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Headline"
          name="headline"
          value={editInput.headline}

        />


        <label>Country</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Country"
          name="country"
          value={editInput.country}

        />


        <label>City</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="City"
          name="city"
          value={editInput.city}

        />



        <label>Company</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Company"
          name="company"
          value={editInput.company}

        />


        <label>Industry</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Industry"
          name="industry"
          value={editInput.industry}
        />



        <label>College</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="College"
          name="college"
          value={editInput.college}
        />



        <label>Website</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Website"
          name="website"
          value={editInput.website}
        />


        <label>About</label>
        <textarea
          placeholder="About Me"
          className="common-textArea"
          onChange={getInput}
          rows={5}
          name="aboutMe"
          value={editInput.aboutMe} />

        <label>Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Skills"
          name="skills"
          value={editInput.skills}
        />


      </div>

      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>Save</button>
      </div>

    </div>
  );
}
