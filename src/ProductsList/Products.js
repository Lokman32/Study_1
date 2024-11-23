import React from "react";
import Product from "./Product";

export default function Products(props) {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Ordinateurs Portable</h1>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
        {props.list.map((e) => (
          <Product key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
}
