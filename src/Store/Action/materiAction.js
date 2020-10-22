export const setMateriSlug = (slugMateri) => {
  return {
    type: "SET_SLUG_MATERI",
    payload: slugMateri,
  };
};

export const setTypeMateri = (typeMateri) => {
  return {
    type: "SET_TYPE_MATERI",
    payload: typeMateri,
  };
};
