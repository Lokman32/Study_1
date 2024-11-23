import React from "react";

// export default function JeuDe(props) {
//   const [De, setDe] = useState(0);
//   const [essai, setEssai] = useState(3);
//   const [messg, setMssg] = useState("Bienvenue");

//   const generer = () => {
//     const newDe = Math.floor(Math.random() * 6) + 1;
//     if (essai > 0) {
//       setDe(newDe);
//       if (newDe === props.cache) {
//         setMssg(`Bravo vous avez trouvez la face cachée: ${props.cache}`);
//       } else {
//         setEssai(essai - 1);
//         setMssg("ressayer");
//       }
//     } else {
//       setMssg(`Pas d'essais`);
//     }
//     console.log(`newDe : ${newDe}`);
//     console.log(`State(De) : ${De}`);
//     console.log(`--------------------------------------------`);
//   };

//   return (
//     <div className="container text-center mt-5" style={{ width: "500px" }}>
//       <h3 className="mb-4">Jeu de Dé</h3>

//       <p className="display-4">
//         Face: <span className="badge bg-info">{De}</span>
//       </p>
//       <p className="lead">
//         Nombre d'essais : <span className="badge bg-warning">{essai}</span>
//       </p>

//       <div className="mb-3">
//         <button className="btn btn-primary me-2" onClick={generer}>
//           Jouer
//         </button>
//       </div>

//       <p className={`alert alert-danger`}>{messg}</p>

//       <p>{props.cache}</p>
//     </div>
//   );
// }

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      De: 0,
      essai: 3,
      messg: `Bienvenue`,
    };
  }

  generer() {
    const newDe = Math.floor(Math.random() * 6) + 1;
    if (this.state.essai > 0) {
      if (newDe === this.props.cache) {
        this.setState({
          ...this.state,
          messg: `Bravo vous avez trouvez la face cachée: ${this.props.cache}`,
          De: newDe,
        });
      } else {
        this.setState({
          ...this.state,
          messg: `Reessayer`,
          essai: this.state.essai - 1,
          De: newDe,
        });
      }
    } else {
      this.setState({
        ...this.state,
        messg: `Pas d'essais`,
      });
    }
  }

  render() {
    return (
      <div className="container text-center mt-5" style={{ width: "500px" }}>
        <h3 className="mb-4">Jeu de Dé</h3>
        <p className="display-4">
          Face: <span className="badge bg-info">{this.state.De}</span>
        </p>
        <p className="lead">
          Nombre d'essais :{" "}
          <span className="badge bg-warning">{this.state.essai}</span>
        </p>
        <div className="mb-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              this.generer();
            }}
          >
            Jouer
          </button>
        </div>
        <p className="alert alert-danger">{this.state.messg}</p>
        <p>{this.props.cache}</p>
      </div>
    );
  }
}
