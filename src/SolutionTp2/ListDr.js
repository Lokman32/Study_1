import React from 'react';

// export default function ListDR(props) {
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

export default class ListDR extends React.Component{
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