import { createSlice } from "@reduxjs/toolkit";

const FSlice = createSlice({
  name: "Fruit",
  initialState: {
    produit: [
      { nom: "banane", type: "fruit" },
      { nom: "orange", type: "fruit" },
      { nom: "pomme", type: "fruit" },
      { nom: "raisins", type: "fruit" },
      { nom: "carotte", type: "legumes" },
      { nom: "pomme de terre", type: "legumes" },
      { nom: "navet", type: "legumes" },
      { nom: "poivron", type: "legumes" },
    ],
    type: null,
  },
  reducers: {
    rechercher: (state, action) => {
      state.type = action.payload;
    },

    supprimer: (state, action) => {
      state.produit.filter((x) => x.nom !== action.payload);
    },
  },
});

export default FSlice;

export const { rechercher, supprimer } = FSlice.actions;
