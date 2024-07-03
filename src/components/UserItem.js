import React from 'react';
import './UserItem.css';
const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <li>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
