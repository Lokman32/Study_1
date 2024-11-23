import React, { useState } from "react";
import AddTache from "./AddTache";
import AfficheTache from "./AfficheTache";

export default function TacheApp() {
  const [Taches, setTaches] = useState([]);

  const addTache = (nT) => {
    setTaches([...Taches, nT]);
  };

  const toggleTache = (id) => {
    const newTache = Taches.map((tache) =>
      tache.id === id ? tache.toggleTerminee() : tache
    );
    setTaches(newTache);
  };

  const supprimerTache = (id) => {
    const newTache = Taches.filter((e) => e.id !== id);
    setTaches(newTache);
  };

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <AddTache addTache={addTache} />
            <AfficheTache
              Tache={Taches}
              toggleTache={toggleTache}
              supprimerTache={supprimerTache}
            />
            <p className="mt-3">
              Le nombre des taches terminées :
              {Taches.filter((e) => e.terminee).length}
            </p>
            <button
              onClick={() => {
                setTaches(Taches.filter((e) => !e.terminee));
              }}
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
