import "./App.css";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-4zin`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  const randomHandler = () => {
    let memory = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memory.includes(randomId)) {
      memory.push(randomId);
      onSearch(randomId);
    } else {
      alert("Personaje ya agregado");
      return;
    }
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} randomized={randomHandler} />
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
