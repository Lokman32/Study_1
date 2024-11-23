import Tache from "./Tache";

const initialState = {
  Taches: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        Taches: [...state.Taches, new Tache(action.payload)],
      };

    case "TOGGL":
      const newTaches = state.Taches.map((e) =>
        e.id === action.payload ? e.toggleTerminee() : e
      );
      return { ...state, Taches: newTaches };

    case "SUPPR":
      const SuupTache = state.Taches.filter((e) => e.id !== action.payload);
      return { ...state, Taches: SuupTache };

    case "SUPPRSELECTED":
      const newTab = state.Taches.filter((e) => !e.terminee );
      return { ...state, Taches: newTab };

    default:
      return state;
  }
};

export default reducer;
