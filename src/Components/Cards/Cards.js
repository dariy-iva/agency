import React from 'react';
import './Cards.css';
import useWindowSize from '../../utils/hooks/useWindowSize';
import Categories from "../Categories/Categories";
import Card from '../Card/Card';
import {useDispatch, useSelector} from "react-redux";
import {deleteCards} from "../../store/slices/cardsSlice";

export default function Cards() {
  const dispatch = useDispatch()
  const {cards} = useSelector( state => state.cards );

  const categoryList = [...new Set( cards.map( item => item.category ).sort() )];
  const [selectedCategory, setSelectedCategory] = React.useState( null );
  const [selectedCards, setSelectedCards] = React.useState( [] );
  const [cardListForRender, setCardListForRender] = React.useState( [] );

  const windowSize = useWindowSize();
  const [maxCards, setMaxCards] = React.useState( 0 );
  const [loadCards, setLoadCards] = React.useState( 0 );
  const [maxCardsAfterLoad, setMaxCardsAfterLoad] = React.useState( 0 );

  function checkSelectedCard(cardId) {
    return selectedCards.includes( cardId );
  }

  function handleChangeCategory(category) {
    setSelectedCategory( category );
  }

  function handleCardClick(cardId) {
    checkSelectedCard( cardId )
      ? setSelectedCards( selectedCards.filter( id => id !== cardId ) )
      : setSelectedCards( [...selectedCards, cardId] );
  }

  function handleCardsLoaderClick() {
    setMaxCardsAfterLoad( maxCardsAfterLoad + loadCards );
  }

  React.useEffect( () => {
    selectedCategory
      ? setCardListForRender( cards.filter( item => item.category === selectedCategory ) )
      : setCardListForRender( cards );
  }, [selectedCategory] );

  React.useEffect( () => {
    setCardListForRender( cards )
    setMaxCards( windowSize > 1039 ? 9 : 8 );
    setLoadCards( windowSize > 1039 ? 9 : 8 );
    setMaxCardsAfterLoad( maxCards );
  }, [windowSize, maxCards, cards] );

  React.useEffect( () => {
    console.log( selectedCards )
    const deleteCardsByDel = (e) => {
      if (e.key === "Delete") {
        console.log( selectedCards )
        dispatch( deleteCards( selectedCards ) );
      }
    }
    document.addEventListener( "keydown", deleteCardsByDel );

    return () => document.removeEventListener( "keydown", deleteCardsByDel );
  }, [selectedCards] );

  return (
    <section className="cards">
      <Categories categoryList={categoryList} selectedCategory={selectedCategory}
                  onChangeCategory={handleChangeCategory}/>
      <ul className="cards__list">
        {cardListForRender.map( (card, index) => {
          if (index < maxCardsAfterLoad) {
            return (
              <li key={card.id}>
                <Card card={card} onCardClick={handleCardClick} checkSelectedCard={checkSelectedCard}
                      onCategoryClick={handleChangeCategory}/>
              </li>
            )
          } else {
            return null;
          }
        } )}
      </ul>
      {(cardListForRender.length > maxCardsAfterLoad) && (<button
        className="cards__loader link-hover"
        onClick={handleCardsLoaderClick}
      >
        Load More
      </button>)}

    </section>
  );
}