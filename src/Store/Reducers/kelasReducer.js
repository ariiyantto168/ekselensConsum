const initialState = {
  slugKelas: "",
  idclass: 0,
};

export default function kelasReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SLUG_KELAS":
      return { ...state, slugKelas: action.payload };
    case "SET_ID_CLASS":
      return { ...state, idclass: action.payload };

    default:
      return state;
  }
}
