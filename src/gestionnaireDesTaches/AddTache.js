import React, { useState } from "react";
import Tache from "./Tache";


export default function AddTache(props) {

  const [inpt, setInpt] = useState("");

  const addTache = () => {
    props.addTache(new Tache(inpt))
    setInpt('')
  }

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
        <button onClick={addTache} className="btn btn-secondary">
          Ajouter
        </button>
      </div>
    </>
  );
}
