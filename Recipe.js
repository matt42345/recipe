import React from 'react'
import style from './recipe.module.css';
export default function Recipe({title, calories, image, ingredients}) {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{parseFloat(calories).toFixed(2)} calories</p>
            <img src={image} alt="image of food" className={style.image}/>
        </div>
    );
}


