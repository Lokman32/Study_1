import React, { useState } from "react";

export default function ViewPersonnel(props) {
  const [Tsalaire, setTsalaire] = useState(0);

  const checkin = (e, x) => {
    if (e.target.checked) {
      setTsalaire(Tsalaire + x.Salaire);
    } else {
      setTsalaire(Tsalaire - x.Salaire);
    }
    // if (e.target.checked) {
    //   setTsalaire(Tsalaire + 1);
    // } else {
    //   setTsalaire(Tsalaire - 1);
    // }
  };

  return (
    <>
      <div className="card-body">
        <h4 className="card-title">{props.head}</h4>
        <div className="card-text">
          {props.personnel
            .filter((e) => e.CodeService === props.code)
            .map((x, i) => (
              <div key={i} className="d-flex gap-2">
                <input
                  type="checkbox"
                  id={x.Numero}
                  onChange={(e) => checkin(e, x)}
                />
                <label htmlFor={x.Numero}> {x.NomComplet}</label>
              </div>
            ))}
        </div>
      </div>

      <p>Total Salaires des personnels coches : {Tsalaire}</p>
    </>
  );
}
