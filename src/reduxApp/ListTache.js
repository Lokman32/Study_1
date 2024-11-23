import React from "react";
import TacheComp from "./TacheComp";
import { useSelector } from "react-redux";

export default function ListTache() {
  const Tache = useSelector((s) => s.Taches);

  return (
    <>
      <ul className="list-group gap-1">
        {Tache.map((e, i) => (
          <li
            key={i}
            className="list-group-item bg-dark-subtle d-flex justify-content-between
            align-items-center flex-wrap"
          >
            <TacheComp e={e} />
          </li>
        ))}
      </ul>
    </>
  );
}
