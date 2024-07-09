import React from 'react';
import Card from './card';
import Image1 from '../assets/Rectangle 2.png'
import Image2 from '../assets/Rectangle3.png'
import Image3 from '../assets/Rectangle4.png'
import Image4 from '../assets/Rectangle5.png'
import Image5 from '../assets/Rectangle6.png'
import Image6 from '../assets/Rectangle7.png'
import Image7 from '../assets/Rectangle8.png'
import Image8 from '../assets/Rectangle9.png'
import Image9 from '../assets/Rectangle1.png'




const data = [
  {
    title: 'Christian Dior',
    text: 'Limited edition Christian Dior shoe for  that stylish man',
    imageUrl: Image1,
    price: 150,
  },
  {
    title: 'Sigma Male',
    text: 'Look stylish with a shirt from our collection and be the alpha male you are.',
    imageUrl: Image2,
    price: 50,
  },
  {
    title: 'Manly Man',
    text: 'Let your feet do the speaking. Shop any of  these shoes from our collection.',
    imageUrl: Image3,
    price: 75,
  },

  {
    title: 'Smiley',
    text: 'Cop a smiley t-shirt and maintain your style.',
    imageUrl: Image4,
    price: 60,
  },
  {
    title: 'Star Shirt',
    text: 'Be chic and swoop your partner off her feet.',
    imageUrl: Image5,
    price: 25,
  },
  {
    title: 'Signet Ring',
    text: 'Beautify your fingers with our signature Signet ring collection.',
    imageUrl: Image6,
    price: 200,
  },
  {
    title: 'Via Belt',
    text: 'What better way to make a statement than with a Via belt.',
    imageUrl: Image7,
    price: 40,
  },
  {
    title: 'Haider Belt',
    text: 'Make a statement with our unique and exquisite collection.',
    imageUrl: Image8,
    price: 75,
  },
  {
    title: 'Jon Snow',
    text: 'Beautify your fingers with our signature Jon Snow collection.',
    imageUrl: Image9,
    price: 75,
  },
];

const Display = () => {
  return (
    <div className='p-3'>
      <div className='row'>
        {data.map((item, index) => (
          <div key={index} sm={12} md={6} lg={4} className="mb-4 col-12 col-md-6 col-lg-4">
            <Card
              imageUrl={item.imageUrl}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
