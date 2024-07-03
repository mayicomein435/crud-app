import React, { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
