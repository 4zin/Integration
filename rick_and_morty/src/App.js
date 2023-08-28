import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import About from "./views/About";
import Nav from "./components/Nav";
import Detail from "./views/Detail";
import Login from "./views/Login";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  let email = "rodelo@mail.com";
  let password = "Rodelo123!!";

  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

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
      {location.pathname === "/" ? null : (
        <Nav onSearch={onSearch} randomized={randomHandler} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
