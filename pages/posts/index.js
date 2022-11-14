import Link from 'next/link';
import React from 'react';

const index = ({ posts }) => {
  return (
    <>
      <h1>Lists of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              {post.title}
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
};
