import React from "react";
import RecetteList from "./RecetteList";
import { recettes } from "./data";
import { Route, Routes } from "react-router-dom";
import DetailRecette from "./DetailRecette";
// import { BrowserRouter } from 'react-router-dom'

export default function RecetteApp() {
  const Recette = recettes;
  return (
    <>
      <Routes>
        <Route path="/" element={<RecetteList list={Recette}/>} />
        <Route path="/recipe/:id" element={<DetailRecette list={Recette}/>} />
      </Routes>
    </>
  );
}
