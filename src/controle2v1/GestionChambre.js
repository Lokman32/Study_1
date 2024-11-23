import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function GestionChambre() {
  const [code, setCode] = useState("");
  const [nblits, setNblits] = useState("");
  const [etages, setEtages] = useState("");
  const [surface, setSurface] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const chmbr = useSelector((s) => s.chambres);

  const { cod } = useParams();

  useEffect(() => {
    const chmbrSelected = chmbr.find((e) => Number(e.code) === Number(cod));
    if (chmbrSelected) {
      setCode(chmbrSelected.code);
      setNblits(chmbrSelected.nombreLits);
      setEtages(chmbrSelected.etage);
      setSurface(chmbrSelected.surface);
      setDescription(chmbrSelected.description);
    } else {
      setCode("");
      setNblits("");
      setEtages("");
      setSurface("");
      setDescription("");
    }
  }, [cod, chmbr]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">GESTION DES CHAMBRES</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border p-4 rounded bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={cod ? true : false}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre de lits</label>
          <input
            type="number"
            className="form-control"
            value={Number(nblits)}
            onChange={(e) => setNblits(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Étages</label>

          {[1, 2, 3].map((x, i) => (
            <div key={i} className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="etage"
                value={`${x}`}
                checked={etages === x}
                onChange={(e) => setEtages(Number(e.target.value))}
              />
              <label className="form-check-label">Étage {x}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Surface</label>
          <input
            type="text"
            className="form-control"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="d-flex gap-3">
          {!cod && (
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch({
                type: "ADD",
                payload: {
                  code: code,
                  nblits: nblits,
                  e: etages,
                  s: surface,
                  desc: description,
                },
              })
            }
          >
            Ajouter
          </button>
          )}
          {cod && (
            <>
              <button
                className="btn btn-warning"
                onClick={() =>
                  dispatch({
                    type: "UPDT",
                    payload: {
                      code: code,
                      nblits: nblits,
                      e: etages,
                      s: surface,
                      desc: description,
                    },
                  })
                }
              >
                Modifier
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "DLTE", payload: { code } })}
              >
                Supprimer
              </button>
            </>
          )}
          <button
            className="btn btn-secondary"
            onClick={() => {
              setCode(cod ? code : "");
              setNblits("");
              setEtages("");
              setSurface("");
              setDescription("");
            }}
          >
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
  );
}
