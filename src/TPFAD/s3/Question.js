import React, { useState } from "react";

export default function Question(props) {
  const [disabled, setdisabled] = useState(false);
  const [result, setresult] = useState("");

  const resoudre = (e) => {
    const reponse = Number(e.target.innerHTML);

    reponse === props.ele.réponseCorrect
      ? setresult(
          <p style={{ color: "green" }}>{reponse} est une bonne reponse</p>
        )
      : setresult(
          <p style={{ color: "red" }}>{reponse} est une mauvaise reponse</p>
        );

    setdisabled(true);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <h2 className="card-title">{props.ele.enoncé}</h2>
        <div className="d-flex mb-3">
          {props.ele.options.map((option, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary mx-1"
              onClick={resoudre}
              disabled={disabled}
            >
              {option}
            </button>
          ))}
        </div>
        {result}
      </div>
    </div>
  );
}
