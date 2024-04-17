import React, { useState } from 'react';
import './ContactList.css'; // Import CSS file for styling

function ContactList() {
    // State to manage the list of contacts
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);

    // State to manage form inputs
    const [newContact, setNewContact] = useState({ name: '', email: '' });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate a unique ID for the new contact
        const id = contacts.length + 1;
        // Create a new contact object
        const contact = { id, ...newContact };
        // Add the new contact to the list
        setContacts((prevContacts) => [...prevContacts, contact]);
        // Reset the form inputs
        setNewContact({ name: '', email: '' });
    };

    return (
        <div className="contact-list-container">
            <h2>Contact List</h2>
            {/* Form to add new contact */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newContact.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newContact.email}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Contact</button>
            </form>

            {/* List of contacts */}
            <ul className="contact-list">
                {contacts.map((contact) => (
                    <li key={contact.id} className="contact-item">
                        <span>{contact.name}</span>
                        <span>{contact.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
