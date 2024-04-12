import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><span>Name:</span> {user.name}</p>
        <p><span>Email:</span> {user.email}</p>
        <p><span>Bio:</span> {user.bio}</p>
      </div>
    </div>
  );
};

const EditProfile = ({ user }) => {
  return (
    <div className="profile">
      <h2>Edit Profile</h2>
      <form className="edit-form">
        <label><span>Name:</span> <input type="text" defaultValue={user.name} /></label>
        <label><span>Email:</span> <input type="email" defaultValue={user.email} /></label>
        <label><span>Bio:</span> <textarea defaultValue={user.bio}></textarea></label>
      </form>
    </div>
  );
};

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="app">
      <h1>Simple React User Profile</h1>
      {editMode ? <EditProfile user={user} /> : <UserProfile user={user} />}
      <button onClick={toggleMode} className={editMode ? 'view-mode' : 'edit-mode'}>
        {editMode ? "View Mode" : "Edit Mode"}
      </button>
    </div>
  );
};

export default App;
