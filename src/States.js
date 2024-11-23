import React, { useState } from "react";

export default function States() {
  // const [message, setMessage] = useState("Bienvenue visiteur");
  // const [btnMsg, setBtnMsg] = useState("Inscription");
  // const [inptValue, setinptValue] = useState("");
  // const [Nom, setNom] = useState("");
  // const [compteur, setCompteur] = useState(0);
  
    // const Inscription = () => {
    //   setMessage("Votre Inscription effectuee");
    //   setBtnMsg("Merci");
    // };
  
    // const AfficherNom = () => {
    //   setNom(inptValue);
    //   setinptValue('')
    // };
  
    // const incrimenter = () => {
    //   setCompteur(compteur + 1);
    // };
    // const decrimenter = () => {
    //   setCompteur(compteur - 1);
    // };

  // const [start, setStart] = useState(0);
  // let x = 0

  // const setStat = () => {
  //   x = start + 1;
  //   setStart(x);
  //   console.log(`setState(x) : ${x}`);
  //   console.log(`State(start) : ${start}`);
  // };

  return (
    <>
      {/* <button onClick={setStat}>incrimenter</button>
      <p>{start}</p> */}
      {/* <div>
        <h2>{message}</h2>
      <button onClick={Inscription}>{btnMsg}</button>
      </div> */}
      {/* <div>
        <input
          type="text"
          value={inptValue}
          onChange={(e) => {
            setinptValue(e.target.value);
          }}
        />
        <button onClick={AfficherNom}>Afficher</button>
        <h3>Nom : {Nom}</h3>
      </div> */}
      {/* <div className="container mt-5">
        <h4>N° : {compteur}</h4>
        <button className="btn btn-primary m-2" onClick={incrimenter}>
          Incrimenter
        </button>
        <button className="btn btn-secondary" onClick={decrimenter}>
          Decrimenter
        </button>
      </div> */}
    </>
  );
}
