export function setSlug(slugKelas) {
  return {
    type: "SET_SLUG_KELAS",
    payload: slugKelas,
  };
}

export function setIdClass(setId) {
  return {
    type: "SET_ID_CLASS",
    payload: setId,
  };
}
