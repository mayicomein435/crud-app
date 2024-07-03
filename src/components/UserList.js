import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import UserForm from './UserForm';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  const addUser = async (user) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    setUsers([...users, response.data]);
  };

  const updateUser = async (user) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
    setUsers(users.map(u => u.id === user.id ? response.data : u));
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} onEdit={() => setEditingUser(user)} onDelete={deleteUser} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
