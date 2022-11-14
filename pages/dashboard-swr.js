import React, { use } from 'react';
import useSwr from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard');
  const data = await res.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSwr('dashboard', fetcher);
  return (
    <div>
      {error ? (
        'Something went wrong'
      ) : !data ? (
        'Loading...'
      ) : (
        <div>
          <h2>Posts – {data.posts}</h2>
          <h2>Likes – {data.likes}</h2>
          <h2>Followers – {data.followers}</h2>
          <h2>Following – {data.following}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardSWR;
