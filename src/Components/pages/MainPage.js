import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo.js';
import Cards from '../Cards/Cards';

export default function MainPage() {
  return (
    <>
      <div className="background background_color_gray">
        <div className="wrapper">
          <Header/>
          <Promo/>
        </div>
      </div>
      <div className="background background_color_beige">
        <div className="wrapper">
          <Cards/>
        </div>
      </div>
    </>
  );
}