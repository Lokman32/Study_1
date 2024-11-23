import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function FormTache() {
  const [inpt, setInpt] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h3>Gestion des Taches</h3>

      <div className="input-group mb-3" style={{ width: "fit-content" }}>
        <label className="input-group-text" htmlFor="tacheinpt">
          Nouveau Tache
        </label>
        <input
          type="text"
          className="form-control"
          id="tacheinpt"
          value={inpt}
          onChange={(e) => {
            setInpt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInpt("");
            dispatch({ type: "ADD", payload: inpt });
          }}
          className="btn btn-secondary"
        >
          Ajouter
        </button>
      </div>
    </>
  );
}
