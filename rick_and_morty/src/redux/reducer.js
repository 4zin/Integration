import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, payload],
        allCharactersFav: [...state.allCharactersFav, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(payload)
        ),
      };

    case FILTER:
      const allCharactersFilter = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFilter,
      };

    case ORDER:
      const charactersOrder = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? charactersOrder.sort((a, b) => a.id - b.id)
            : charactersOrder.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
