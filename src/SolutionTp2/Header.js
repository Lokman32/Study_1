import React from 'react'

// export default function Header(props) {
//   const headerStyle = {
//     color: props.couleur,
//     textAlign: "center",
//   };
//   return <h1 style={headerStyle}>Bienvenue dans {props.titre}</h1>;
// }

export default class Header extends React.Component {
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