import React, { useEffect, useState } from "react";
import RechercheChambre from "./RechercheChambre";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ConsultationChambre() {
  const ch1 = useSelector((s) => s.chambres); 
  const ch2 = useSelector((s) => s.chercheResult);
  const [affichage, setAffichage] = useState(ch1); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (ch2.length > 0) {
      setAffichage(ch2);
    } else {
      setAffichage(ch1);
    }
  }, [ch1, ch2]);


  return (
    <div className="container mt-4">
      <RechercheChambre />
      <h1 className="text-center my-4">Consulter les chambres</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Code</th>
            <th>Nombre de lits</th>
            <th>Étages</th>
            <th>Surface</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {affichage.length > 0 ? (
          <tbody>
            {affichage.map((e, i) => (
              <tr key={i}>
                <td>{e.code}</td>
                <td>{e.nombreLits}</td>
                <td>{e.etage}</td>
                <td>{e.surface}</td>
                <td>{e.description}</td>
                <td className="d-flex gap-2">
                  <Link
                    to={`/GestionChambre/${e.code}`}
                    className="btn btn-warning btn-sm"
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      dispatch({ type: "DLTE", payload: { code: e.code } })
                    }
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={6} className="text-center">
                aucune chambres trouvee
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
