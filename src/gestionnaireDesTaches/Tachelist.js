import React from "react";

export default function Tachelist(props) {

  const toggleTache = (id) => {
    props.toggleTache(id)
  };

  const supprimerTache = (id) => {
    props.supprimerTache(id)
  };

  return (
    <>
      <div
        className="d-flex gap-3 flex-grow-1 align-items-center"
        onClick={() => toggleTache(props.e.id)}
      >
        <input
          className="form-check-input me-2"
          type="checkbox"
          id={props.e.id}
          checked={props.e.terminee}
          onChange={() => toggleTache(props.e.id)}
        />
        <label className="form-check-label" htmlFor={props.e.id}>
          {props.e.description}
        </label>
      </div>
      <button
        onClick={() => {
          supprimerTache(props.e.id);
        }}
        className="btn btn-danger fw-bolder"
      >
        X
      </button>
    </>
  );
}
