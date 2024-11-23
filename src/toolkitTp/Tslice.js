import { createSlice } from "@reduxjs/toolkit";
const Tslice = createSlice({
  name: "Tache",
  initialState: {
    taches: [],
    cpt: 0,
  },
  reducers: {
    ajouterTache: (state, action) => {
      state.taches.push({
        id: state.cpt,
        description: action.payload,
        terminee: false,
      });
      state.cpt++;
    },
    setTerminTache: (state, action) => {
      const tache = state.taches.find((x) => x.id === action.payload);
      tache.terminee = !tache.terminee;
    },
    supprimerTache: (state, action) => {
      state.taches = state.taches.filter((x) => x.id !== action.payload);
    },
  },
});
export const { ajouterTache, setTerminTache, supprimerTache } = Tslice.actions;

export default Tslice;
