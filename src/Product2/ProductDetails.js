import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails(props) {
  const { id } = useParams();

  const elem = props.list.find((x) => x.id === Number(id));

  return (
    <>
      <div className="container p-5">
        <div className="col h-100">
          <div className="row row-cols-12 row-cols-sm-8 row-cols-md-3">
            <div className="card h-100">
              <img
                src={`../images/${elem.thumbnail}`}
                className="card-img-top"
                alt={`${elem.thumbnail}`}
              />
              <div className="card-body">
                <h6
                  className="card-title"
                  style={{ textWrap: "nowrap", overflow: "hidden" }}
                >
                  {elem.title}
                </h6>
                <p className="card-text">{elem.price}</p>
                <button className="btn btn-outline-secondary">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
          <Link to={`/`}>Back to Products Page</Link>
        </div>
      </div>
    </>
  );
}
