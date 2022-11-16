import Image from 'next/image';
import React from 'react';
import img from 'public/1.jpg';

const Cats = () => {
  return (
    <div>
      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              alt='cat'
              loading='lazy'
              width='280'
              height='420'
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cats;
