/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://6436f7ad8205915d34018d30.mockapi.io/Items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://6436f7ad8205915d34018d30.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
     axios
       .get("https://6436f7ad8205915d34018d30.mockapi.io/favorites")
       .then((res) => {
         setFavorites(res.data);
       });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://6436f7ad8205915d34018d30.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6436f7ad8205915d34018d30.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://6436f7ad8205915d34018d30.mockapi.io/favorites/${obj.id}`);
    } else {
      const {data} = await axios.post("https://6436f7ad8205915d34018d30.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, data]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
              
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
