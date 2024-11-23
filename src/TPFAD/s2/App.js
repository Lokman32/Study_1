import React from 'react'
import DropList from './DropList';
import { marques, salles } from './data';


export default function FApp() {
  // const [CurrentPC, setCurrentPC] = useState(Ordinateurs[0]);
  // const [marque, SetMarque] = useState(marques[0]);
  // const [salle, SetSalle] = useState(salles[0]);
  // const [ordinateursTrouvés, setOrdinateurs] = useState(Ordinateurs);

  const changerMarque =()=>{
    
  }


  const changerSalle =()=>{
    
  }

  const rechercher =()=>{

  }


  return (
    <>
      <div>
        <div>
          <label>Marque:</label>{" "}
          <DropList items={marques} selectedItem={changerMarque} />
          <label>Salle:</label>
          <DropList items={salles} selectedItem={changerSalle} />
          <button onClick={rechercher}>Recherche</button>
        </div>
        {/* <div style={{ display: "inline-block" }}>
          <RecherchOrdinateur
            elements={ordinateursTrouvés}
            selectedElement={changerOrdinateur}
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <FormNew submit={ajouterPC} />
        </div>
        <div>
          <InfoOrdinateur Ordinateur={CurrentPC} />
        </div>*/}
      </div>
    </>
  );
}
