import React, { useState, useRef } from 'react';
import './UserForm.css'; // Import CSS file for styling

const UserForm = () => {
    const [name, setName] = useState('');
    const emailInputRef = useRef(null);
    const [nameError, setNameError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 3) {
            setNameError('Name must be at least 3 characters long.');
        } else {
            setNameError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className={nameError ? 'error' : ''}
                />
                {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    ref={emailInputRef}
                />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default UserForm;
