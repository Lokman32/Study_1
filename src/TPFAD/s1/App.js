import React, { useState } from "react";
import Service from "./Service";
import { ListServices, ListPersonnels } from "./data";
import ViewPersonnel from "./ViewPersonnel";

export default function Tapp() {
  const [codedeser, setCodedeser] = useState(ListServices[0].Code);

  const CodeSer = (i) => {
    setCodedeser(i);
    console.log(codedeser);
  };

  return (
    <>
      <div className="container p-5">
        <Service service={ListServices} CodeSer={CodeSer} />
        <div className="card-group px-5">
          <div className="card">
            <ViewPersonnel
              personnel={ListPersonnels}
              head={"Les responsables de service Informatique"}
              code={codedeser}
            />
          </div>
          <div className="card">
            <ViewPersonnel
              personnel={ListPersonnels}
              head={"Autre service"}
              code={"200"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
