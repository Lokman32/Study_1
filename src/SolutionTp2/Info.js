import React from 'react'

// export default function Info(props) {
//   return (
//     <div>
//       <h2>responsable connectee : {props.responsable}</h2>
//       <h3>code : {props.code}</h3>
//     </div>
//   );
// }

export default class Info extends React.Component{
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