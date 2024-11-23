import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTerminTache, supprimerTache } from "./Tslice";

export default function ListTache() {
  const Tache = useSelector((s) => s.sTaches.taches);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-group gap-1">
        {Tache.map((e, i) => (
          <li
            key={i}
            className="list-group-item bg-dark-subtle d-flex justify-content-between
            align-items-center flex-wrap"
          >
            <div className="d-flex gap-3 flex-grow-1 align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id={e.id}
                checked={e.terminee}
                onChange={() => dispatch(setTerminTache(e.id))}
              />
              <label className="form-check-label" htmlFor={e.id}>
                {e.description}
              </label>
            </div>
            <button
              onClick={() => {
                dispatch(supprimerTache(e.id));
              }}
              className="btn btn-danger fw-bolder"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
