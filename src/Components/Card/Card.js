import './Card.css';

export default function Card({card, onCardClick, checkSelectedCard, onCategoryClick}) {
  const {id, name, image, category} = card;

  function handleCardClick() {
    onCardClick(id);
  }

  function handleCategoryClick(e) {
    e.stopPropagation();
    onCategoryClick(category);
  }

  return (
    <article className="card" status={checkSelectedCard(id) ? 'active' : 'not-active'} onClick={handleCardClick}>
      <img src={image} className="card__image"/>
      <div className="card__description" onClick={handleCategoryClick}>
        <p className="card__category" onClick={handleCategoryClick}>{category}</p>
        <p className="card__name">{name}</p>
      </div>
    </article>
  );
}