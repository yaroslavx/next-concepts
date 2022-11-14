import React from 'react';

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>List of {category} articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {article.title} | {article.description}
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
