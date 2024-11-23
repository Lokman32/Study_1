import React from "react";
import { projets, types, Employe, Taches } from "../data";

// function Header(props) {
//   const headerStyle = {
//     color: props.couleur,
//     textAlign: "center",
//   };
//   return <h1 style={headerStyle}>Bienvenue dans {props.titre}</h1>;
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headerStyle = {
      color: this.props.couleur,
      textAlign: "center",
    };
    return <h1 style={headerStyle}>Bienvenue dans {this.props.titre}</h1>;
  }
}

// function Info(props) {
//   return (
//     <div>
//       <h2>responsable connectee : {props.responsable}</h2>
//       <h3>code : {props.code}</h3>
//     </div>
//   );
// }

class Info extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <h2>responsable connectee : {this.props.responsable}</h2>
      <h3>code : {this.props.code}</h3>
    </div>
    )
  }
}

// function ListDR(props) {
//   return (
//     <>
//       <div className="input-group mb-3" style={{ width: "fit-content" }}>
//         <div className="input-group-prepend">
//           <label className="input-group-text" htmlFor={props.titre}>
//             {props.titre}
//           </label>
//         </div>
//         <select className="custom-select" id={props.titre}>
//           {props.list.map((e, i) => (
//             <option key={i} value={e}>
//               {e}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }

class ListDR extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <>
        <div className="input-group mb-3" style={{ width: "fit-content" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor={this.props.titre}>
              {this.props.titre}
            </label>
          </div>
          <select className="custom-select" id={this.props.titre}>
            {this.props.list.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
}

// function TableTache(props) {
//   return (
//     <>
//       <table
//         border={1}
//         className="table table-bordered"
//         style={{ maxWidth: "500px" }}
//       >
//         <thead>
//           <tr>
//             <th>Code Tache</th>
//             <th>Date Tache</th>
//             <th>Resume</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.elements.map((e, i) => (
//             <tr key={i}>
//               <td>{e.Code}</td>
//               <td>{e.Date}</td>
//               <td>{e.Resumé}</td>
//               <td>
//                 <a href="#link">details</a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h5>
//         Totale des heures travaillees :
//         {props.elements.reduce((s, v) => {
//           return (s += v.Durée);
//         }, 0)}
//       </h5>
//     </>
//   );
// }

class TableTache extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <>
        <table
          border={1}
          className="table table-bordered"
          style={{ maxWidth: "500px" }}
        >
          <thead>
            <tr>
              <th>Code Tache</th>
              <th>Date Tache</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.elements.map((e, i) => (
              <tr key={i}>
                <td>{e.Code}</td>
                <td>{e.Date}</td>
                <td>{e.Resumé}</td>
                <td>
                  <a href="#link">details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>
          Totale des heures travaillees :
          {this.props.elements.reduce((s, v) => {
            return (s += v.Durée);
          }, 0)}
        </h5>
      </>
    );
  }
}

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