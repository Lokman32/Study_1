import React from "react";
import Entete from "./Entete";
import { questions } from "./data";
import Question from "./Question";

export default function QuizzApp() {
  return (
    <div className="container">
      <Entete className="my-4" head="Quiz de Mathematique" />
      <div className="row justify-content-center">
      {questions.map((question, index) => (
        <div key={index} className="col-md-4 d-flex justify-content-center">
          <Question ele={question} />
        </div>
      ))}
    </div>
  </div>
  );
}
