import React from 'react';

const Feature = ({ data }) => {
  return <div>{data}</div>;
};

export default Feature;

export const getStaticProps = async (context) => {
  return {
    props: {
      data: context.previewData
        ? context.previewData.user
        : 'List of new features',
    },
  };
};
