import React, { useState } from "react";

export default function Service(props) {
  const [selectV, setSelect] = useState(0);

  const handleSelect = (e) => {
    const newid = props.service.findIndex((x) => x.Code === e.target.value);
    setSelect(newid);
    props.CodeSer(props.service[newid].Code)
  };

  return (
    <>
      <label htmlFor="selectService">Choisir un service</label>
      <select
        value={props.service[selectV].Code}
        onChange={(e) => handleSelect(e)}
        id="selectService"
      >
        {props.service.map((e, i) => (
          <option key={i} value={e.Code}>
            {e.Code}
          </option>
        ))}
      </select>
      <h3>Information Service :</h3>
      <p>Numero : {props.service[selectV].Code}</p>
      <p>Intitulé : {props.service[selectV].Intitulé}</p>
      <p>Responsable : {props.service[selectV].Responsable}</p>
    </>
  );
}
