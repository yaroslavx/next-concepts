import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter();
  function handleOrder() {
    router.push('/product');
  }

  return (
    <>
      <h1>HomePage</h1>
      <Link href='/blog'>
        <h3>Blog</h3>
      </Link>
      <Link href='/product'>
        <h3>Product</h3>
      </Link>
      <button onClick={handleOrder}>Place order</button>
      <Link href='posts'>
        <h3>Posts</h3>
      </Link>
    </>
  );
};

export default Home;
