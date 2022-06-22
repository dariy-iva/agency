import React from 'react';
import './Cards.css';
import {cardList} from '../../utils/constants/cardList';
import Card from '../Card/Card';

export default function Cards() {
  return (
    <section className="cards">
      <ul className="cards__list">
        {cardList.map(card => (
          <Card card={card} key={card.id}/>
        ))}
      </ul>

    </section>
  );
}