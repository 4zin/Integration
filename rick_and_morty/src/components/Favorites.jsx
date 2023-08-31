import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterByGender, orderCards } from "../redux/action";
import Card from "./Card";

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);

  const orderHandler = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const filterHandler = (event) => {
    dispatch(filterByGender(event.target.value));
  };

  return (
    <div>
      <select onChange={orderHandler}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={filterHandler}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={fav.onClose}
          />
        );
      })}
    </div>
  );
};

export default Favorites;

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
