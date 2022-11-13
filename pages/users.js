import React from 'react';
import User from '../components/user';

const Users = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
};
