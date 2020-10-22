const initialState = {
  kategoriAktif: 0,
};

export default function kategoriReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_KATEGORI":
      return { ...state, kategoriAktif: action.payload };

    default:
      return state;
  }
}
