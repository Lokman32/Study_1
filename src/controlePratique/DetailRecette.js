import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailRecette(props) {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const recette = props.list.find((e) => e.id === Number(id));

  const handleLike = () => {
    if (!isLiked) {
      recette.likeCount += 1;
      setIsLiked(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>{recette.title}</h1>
          <img
            src={recette.image}
            alt={recette.tittle}
            className="card-img-top"
            style={{ height: "400px" }}
          />
          <h3>Ingredient</h3>
          <ul>
            {recette.ingredient.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary flex-shrink-0"
            onClick={handleLike}
            style={{width:"100px"}}
          >{`likes ${recette.likeCount}`}</button>
          <p>{recette.instruction}</p>
          <Link to={"/"}>View full recipe</Link>
        </div>
      </div>
    </>
  );
}
