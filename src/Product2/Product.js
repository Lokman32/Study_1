import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
  return (
    <div className="col h-100">
      <Link to={`/product/${props.data.id}`} className="card h-100">
        <img
          src={`./images/${props.data.thumbnail}`}
          className="card-img-top"
          alt={`./images/${props.data.thumbnail}`}
        />
        <div className="card-body">
          <h6
            className="card-title"
            style={{ textWrap: "nowrap", overflow: "hidden" }}
          >
            {props.data.title}
          </h6>
          <p className="card-text">{props.data.price}</p>
          <button className="btn btn-outline-secondary">
            Ajouter au panier
          </button>
        </div>
      </Link>
    </div>
  );
}