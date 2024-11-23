import React from "react";
import { useDispatch } from "react-redux";

import GestionChambre from "./GestionChambre";
import ConsultationChambre from "./ConsultationChambre";
import { Link, Route, Routes } from "react-router-dom";

export default function GestionHotel() {
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid navbar-nav">
          <div className="navbar-nav d-flex justify-content-center w-100">
            <Link
              to="/"
              className="nav-link"
              onClick={() =>
                dispatch({
                  type: "FILTR",
                  payload: { etage: "", description: "" },
                })
              }
            >
              Consulter les Chambres
            </Link>
            <Link to="/GestionChambre" className="nav-link">
              Gestion des chambres
            </Link>
          </div>
        </div>
      </nav>

      <div className="card p-4">
        <Routes>
          <Route path="/" element={<ConsultationChambre />} />
          <Route path="/GestionChambre/:cod" element={<GestionChambre />} />
          <Route path="/GestionChambre/" element={<GestionChambre />} />
        </Routes>
      </div>
    </div>
  );
}
