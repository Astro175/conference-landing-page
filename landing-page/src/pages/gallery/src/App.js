import React from 'react';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';

const headImageUrls = [
  '/images/img9.jpg',
  '/images/img2.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img12.jpg',
]

const imageUrls = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
  '/images/img9.jpg',
  '/images/img10.jpg',
  '/images/img11.jpg',
  '/images/img12.jpg',
  '/images/img13.jpg',
  '/images/img14.jpg',
  '/images/img15.jpg',
  '/images/img16.jpg',
  '/images/img17.jpg',
  '/images/img18.jpg',
  '/images/img19.jpg',
  '/images/img20.jpg',
  '/images/img21.jpg',
  '/images/img22.jpg',
  '/images/img23.jpg',
  '/images/img24.jpg',
  '/images/img25.jpg',
  '/images/img26.jpg',
  '/images/img27.jpg',
  '/images/img28.jpg',
  '/images/img29.jpg',
  '/images/img30.jpg',
  '/images/img31.jpg',
];


const App = () => {
  return (
    <div>
      <div>
        <Header headImageUrls={headImageUrls}/>
      </div>
      <div>
        <h1>Welcome to the Gallery</h1>
        <Gallery imageUrls={imageUrls}/>
      </div>
    </div>
  );
};

export default App;
