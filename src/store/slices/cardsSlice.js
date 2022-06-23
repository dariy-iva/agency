import {createSlice} from "@reduxjs/toolkit";
import {cardList} from "../../utils/constants/cardList";

const initialState = {
  cards: cardList,
};

const cardsSlice = createSlice( {
  name: "cards",
  initialState,
  reducers: {
    deleteCards(state, action) {
      const listId = action.payload;
      listId.forEach( id => {
        state.cards = state.cards.filter( card => card.id !== id );
      } )
    },
  },
} );

export const {deleteCards} = cardsSlice.actions;
export default cardsSlice.reducer;