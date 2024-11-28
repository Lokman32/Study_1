import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./Pslice";

function TaApp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur : {error}</p>}
      {status === "succeeded" && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default TaApp;
