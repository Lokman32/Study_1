import React from 'react';
import { projets, types, Employe, Taches } from "./data";
import ListDR from './ListDr';
import Info from './Info';
import TableTache from './TableTache';
import Header from './Header';

// export default function GestionnaireDesResponsables() {
//   return (
//     <div className="container">
//       <Header titre={"My OFPPT"} couleur={"lightblue"} />
//       <Info responsable={"Louqmane Bamousse"} code={"YT1445"} />
//       <div className="d-flex mb-3 row-gap-2 column-gap-5 flex-wrap">
//         <ListDR titre={"type"} list={types} />
//         <ListDR titre={"employe"} list={Employe} />
//         <ListDR titre={"projets"} list={projets} />
//       </div>
//       <TableTache elements={Taches} />
//     </div>
//   );
// }

export default class GestionnaireDesResponsables extends React.Component{
  render(){
    return (
      <div className="container">
        <Header titre={"My OFPPT"} couleur={"lightblue"} />
        <Info responsable={"Louqmane Bamousse"} code={"YT1445"} />
        <div className="d-flex mb-3 row-gap-2 column-gap-5 flex-wrap">
          <ListDR titre={"type"} list={types} />
          <ListDR titre={"employe"} list={Employe} />
          <ListDR titre={"projets"} list={projets} />
        </div>
        <TableTache elements={Taches} />
      </div>
    );
  }
}