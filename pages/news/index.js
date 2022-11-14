import React from 'react';

const NewArticleList = ({ articles }) => {
  return (
    <>
      <h1>List of articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default NewArticleList;

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/news');
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
