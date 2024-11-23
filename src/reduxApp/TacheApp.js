import React from "react";
import FormTache from "./FormTache";
import ListTache from "./ListTache";
import { useDispatch, useSelector } from "react-redux";

export default function TacheApp() {
  const Taches = useSelector((s) => s.Taches);
  const dispatch = useDispatch()

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <FormTache />
            <ListTache />
            <p className="mt-3">
              Le nombre des taches terminées :
              {Taches.filter((e) => e.terminee).length}
            </p>
            <button
              onClick={() => {dispatch({type:'SUPPRSELECTED'})}}
              className="btn btn-outline-danger w-100 mt-2"
            >
              Supprimer Les Taches Terminées
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
