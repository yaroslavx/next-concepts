import React, { useEffect, useState } from 'react';
import { getSessionm, signIn } from 'next-auth/client';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <h1>ProfilePage</h1>;
};

export default Profile;
