import chambre from "./Chambre";

const initialState = {
  chambres: [
    new chambre(101, 2, 25, 2, "une chambre incroyable"),
    new chambre(102, 3, 30, 3, "une chambre"),
  ],
  chercheResult: [],
};

const reducer = (state = initialState, action) => {
  const { code, nblits, s, e, desc } = action.payload || {};
  switch (action.type) {
    case "FILTR":
      let { inpt, inpt1 } = action.payload;

      // const filteredChambres = state.chambres.filter((ele) => {
      //   const matchesEtage = inpt ? ele.etage === Number(inpt) : true;
      //   const matchesDescription = inpt1
      //     ? ele.description.toLowerCase().includes(inpt1.toLowerCase())
      //     : true;
      //   return matchesEtage && matchesDescription;
      // });

      if (inpt === "") {
        inpt = undefined;
      }
      if (inpt1 === "") {
        inpt1 = undefined;
      }

      const filteredChambres =
        inpt && inpt1
          ? state.chambres.filter(
              (ele) =>
                ele.etage === Number(inpt) && ele.description.includes(inpt1)
            )
          : inpt || inpt1
          ? state.chambres.filter(
              (ele) =>
                ele.etage === Number(inpt) || ele.description.includes(inpt1)
            )
          : [];
      console.log(filteredChambres);

      return { ...state, chercheResult: filteredChambres };

    case "ADD":
      return {
        ...state,
        chambres: [...state.chambres, new chambre(code, nblits, s, e, desc)],
      };
    case "UPDT":
      return {
        ...state,
        chambres: state.chambres.map((x) =>
          x.code === code ? new chambre(code, nblits, s, e, desc) : x
        ),
      };

    case "DLTE":
      return {
        ...state,
        chambres: state.chambres.filter((e) => e.code !== action.payload.code),
      };

    default:
      return { ...state };
  }
};

export default reducer;
