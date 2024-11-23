import React from "react";
import Tachelist from "./Tachelist";

export default function AfficheTache(props) {
  const toggleTache = (id) => {
    props.toggleTache(id);
  };

  const supprimerTache = (id) => {
    props.supprimerTache(id);
  };

  return (
    <>
      <ul className="list-group gap-1">
        {props.Tache.map((e, i) => (
          <li
            key={i}
            className="list-group-item bg-dark-subtle d-flex justify-content-between
            align-items-center flex-wrap"
          >
            <Tachelist
              e={e}
              toggleTache={toggleTache}
              supprimerTache={supprimerTache}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
