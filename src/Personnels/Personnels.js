import React, { useState } from "react";
import { personnels } from "./data";

function Inputt(props) {
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label" htmlFor={props.label}>
        {props.label}
      </label>
      <div className="col-sm-9">
        <input
          className="form-control"
          value={props.value}
          id={props.label}
          readOnly
        />
      </div>
    </div>
  );
}

function Action(props) {
  return (
    <button className="btn btn-primary mx-2" onClick={props.Action}>
      {props.title}
    </button>
  );
}

export default function Personnels() {
  const [index, setIndex] = useState(0);
  const [selectt, setSelect] = useState(personnels[0].Matricule);

  const getFirst = () => {
    setIndex(0);
    setSelect(personnels[0].Matricule);
  };

  const getPrecedent = () => {
    if (index === 0) {
      setIndex(0);
      setSelect(personnels[0].Matricule);
    } else {
      setIndex(index - 1);
      setSelect(personnels[index - 1].Matricule);
    }
  };

  const getSuivant = () => {
    if (index === personnels.length - 1) {
      setIndex(personnels.length - 1);
      setSelect(personnels[personnels.length - 1].Matricule);
    } else {
      setIndex(index + 1);
      setSelect(personnels[index + 1].Matricule);
    }
  };

  const getLast = () => {
    setIndex(personnels.length - 1);
    setSelect(personnels[personnels.length - 1].Matricule);
  };

  const selectionner = (e) => {
    setSelect(e.target.value);
  };

  const rechercherMatricule = () => {
    const ni = personnels.findIndex(
      (e) => Number(e.Matricule) === Number(selectt)
    );
    setIndex(ni);
  };

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="selectMatricule" className="form-label">
            Rechercher Par Matricule
          </label>
          <div className="input-group">
            <select
              id="selectMatricule"
              className="form-select"
              value={selectt}
              onChange={selectionner}
            >
              {personnels.map((e, i) => (
                <option key={i} value={e.Matricule}>
                  {e.Matricule}
                </option>
              ))}
            </select>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={rechercherMatricule}
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <div className="card p-3">
        <Inputt label="Matricule" value={personnels[index].Matricule} />
        <Inputt label="Nom" value={personnels[index].Nom} />
        <Inputt label="Prénom" value={personnels[index].Prenom} />
        <Inputt label="Service" value={personnels[index].Service} />
      </div>

      <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center flex-column flex-sm-row">
        <Action title="Premier" Action={getFirst} />
        <Action title="Précédent" Action={getPrecedent} />
        <Action title="Suivant" Action={getSuivant} />
        <Action title="Dernier" Action={getLast} />
      </div>
    </div>
  );
}
