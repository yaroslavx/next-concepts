import { useRouter } from 'next/router';
import React from 'react';

const Events = ({ news }) => {
  const [newsList, setNewsList] = useState(news);
  const router = useRouter();

  const fetchSpaceNews = async () => {
    const response = await fetch('http://localhost:4000/news?category=space');
    const data = await response.json();
    setNewsList(data);
    router.push('/news?category=space', undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSpaceNews}>Space news</button>
      <h1>List of articles</h1>
      {newsList.map((article) => {
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

export default Events;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : '';
  const response = await fetch(`http://localhost:4000/news?${queryString}`);
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
};
