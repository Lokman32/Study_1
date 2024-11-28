import React, { useState } from "react";
import axios from "axios";

export default function ApiApp() {
  const [user,setUser]=useState()
  const getUser = async (e) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${e.target.value}`
    );
    setUser(response.data)
  };

  return (
    <>
      <input type="number" onChange={getUser} />
      {user && (
      <div>
        <p>id : {user.id}</p>
        <p>name : {user.name}</p>
      </div>
      )}
    </>
  );
}
