import React from "react";
import { useSelector } from "react-redux";

export default function ResultatList() {
  const type = useSelector(s=>s.items.type)
  const items = useSelector(s=>s.items.produit)
  return (
    <>
      <h2>Resultat List</h2>
      <ul>
      {!type ? items.map((e,i)=>(
        <li key={i}>
        {e}
        </li>
      )) : items
      .filter(ele => ele.type === type)
      .map((e,i)=>(
        <li key={i}>
        {e}
        </li>
      ))}
      </ul>
    </>
  );
}
