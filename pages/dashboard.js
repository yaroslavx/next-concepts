import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isLoaading, setIsLoaading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/dashboard');
      const data = await res.json();
      setDashboardData(data);
      setIsLoaading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoaading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Posts – {dashboardData.posts}</h2>
          <h2>Likes – {dashboardData.likes}</h2>
          <h2>Followers – {dashboardData.followers}</h2>
          <h2>Following – {dashboardData.following}</h2>
        </div>
      )}
    </>
  );
};

export default Dashboard;
