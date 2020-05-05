import React from "react";
import style from "./recipe.module.css";

const Recipes = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <img src={image} alt="" />
      <ul>
        {ingredients.map((element, index) => (
          <li key={index}>{element.text}</li>
        ))}
      </ul>
      <p>
        <a className={style.link} href={url}>Let's make it!</a>
      </p>
    </div>
  );
};

export default Recipes;
