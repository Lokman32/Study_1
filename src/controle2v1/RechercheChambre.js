import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function RechercheChambre() {
  const [inpt, setinpt] = useState('');
  const [inpt1, setinpt1] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="container my-3 bg-info p-4">
      <div className="row g-2 align-items-center">
        <div className="col-md-5">
          <input
            type="text"
            value={inpt}
            className="form-control"
            placeholder="Entrer l'étage"
            onChange={(e) => setinpt(e.target.value)}
          />
        </div>

        <div className="col-md-5">
          <input
            type="text"
            value={inpt1}
            className="form-control"
            placeholder="Entrer la description"
            onChange={(e) => setinpt1(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              dispatch({
                type: "FILTR",
                payload: { inpt: inpt.trim(), inpt1: inpt1.trim() },
              });
              setinpt("");
              setinpt1("");
            }}
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
}
