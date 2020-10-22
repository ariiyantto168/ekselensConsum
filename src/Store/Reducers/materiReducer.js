const initialState = {
  slugMateriKelas: "",
  type: "",
};

export default function materiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SLUG_MATERI":
      return { ...state, slugMateriKelas: action.payload };
    case "SET_TYPE_MATERI":
      return { ...state, type: action.payload };
    default:
      return state;
  }
}
