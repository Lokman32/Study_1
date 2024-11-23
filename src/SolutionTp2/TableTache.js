import React from 'react';

// export default function TableTache(props) {
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

export default class TableTache extends React.Component{
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