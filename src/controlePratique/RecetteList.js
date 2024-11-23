import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RecetteList(props) {
  const [inptTxt, setInptTxt] = useState("");
  const [recipes, setRecipes] = useState(props.list);

  const handleInpt = (e) => {
    setInptTxt(e.target.value);
    setRecipes(
      props.list.filter((x) => x.title.toLowerCase().includes(e.target.value))
    );
    if (e.target.value === "") {
      setRecipes(props.list);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Recipe Book</h1>
        <input
          type="text"
          value={inptTxt}
          placeholder="Search for a recipe"
          style={{ width: "300px" }}
          className="form-control p-2 mb-3"
          onChange={handleInpt}
        />
        <div className="row  g-4">
          {recipes.map((e) => (
            <div key={e.id} className="col">
              <div className="card">
                <img
                  src={e.image}
                  alt={e.title}
                  className="card-img-top"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h1 className="card-title">{e.title}</h1>
                  <span>{e.likeCount} 👍</span>
                  <p className="card-text">{e.instruction}</p>
                  <Link to={`/recipe/${e.id}`}>view details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
