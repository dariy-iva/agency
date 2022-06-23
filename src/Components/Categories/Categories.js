import React from 'react';
import './Categories.css';

export default function Categories({categoryList, selectedCategory, onChangeCategory}) {

  function handleChangeCategory(e) {
    onChangeCategory( e.target.value );
  }

  return (
    <>
      <ul className="categories">
        <li><label
          className={`categories__item ${!selectedCategory ? 'categories__item_active' : ''}`}>show
          all
          <input type="radio" name="category" className="categories__input" value='' defaultChecked={true}
                 onClick={handleChangeCategory}/>
        </label></li>
        {categoryList.map( category => (
          <li key={category}><label
            className={`categories__item ${selectedCategory === category ? 'categories__item_active' : ''}`}>{category}
            <input type="radio" name="category" value={category} className="categories__input"
                   onChange={handleChangeCategory}/>
          </label></li>
        ) )}
      </ul>

      <select className="categories_mobile categories__item" name="category" onChange={handleChangeCategory}>
        <option selected className="categories__item" value=''>show all</option>
        {categoryList.map(category => (
          <option key={category} value={category} className="categories__item">{category}</option>
        ))}
      </select>
    </>
  );
}