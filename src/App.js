import React, { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./Recipes";

const App = () => {
  const APP_ID = "bdbcd312";
  const APP_KEY = "9f1f22f89412622c205c882d3a7611d8";

  // States and useEffects
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      // //Tradtional way
      // fetch(
      //   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      // ).then(async (response) => {
      //   let data = await response.json()
      //   console.log(data);
      // });
  
      // Alternative - easier
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  

  // Update Search box
  const updateSearch = (search) => {
    setSearch(search.target.value);
  };

  // Update Query - string to be searched
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          placeholder="Yum! Chicken! Craving something else?"
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
      ))}
      </div>
    </div>
  );
};

export default App;
