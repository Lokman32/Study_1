import React from "react";
import { useDispatch } from "react-redux";

export default function TacheComp(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="d-flex gap-3 flex-grow-1 align-items-center"
      >
        <input
          className="form-check-input me-2"
          type="checkbox"
          id={props.e.id}
          checked={props.e.terminee}
          onChange={() => dispatch({ type: "TOGGL", payload: props.e.id })}
        />
        <label className="form-check-label" htmlFor={props.e.id}>
          {props.e.description}
        </label>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "SUPPR", payload: props.e.id });
        }}
        className="btn btn-danger fw-bolder"
      >
        X
      </button>
    </>
  );
}
