import React from 'react';
import Head from 'next/head';

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>Article</h1>
    </>
  );
};

export default Blog;

export const getServerSideProps = async (context) => {
  const user = process.env.DB_USER;
  const passwort = process.env.DB_PASSWORD;
  return {
    props: {
      title: 'Article title',
      description: 'Article desctiprion',
    },
  };
};
