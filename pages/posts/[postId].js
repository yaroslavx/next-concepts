// import { useRouter } from 'next/router';
import React from 'react';

const Post = ({ post }) => {
  //   const router = useRouter();

  //   if (router.isFallback) {
  //     return <h1>Loading...</h1>;
  //   }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <div>{post.body}</div>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const posts = await res.json();

  //   const paths = posts.map((post) => {
  //     return { params: { postId: `${post.id}` } };
  //   });

  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '2' } },
    ],
    // paths,
    // fallback: true,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
