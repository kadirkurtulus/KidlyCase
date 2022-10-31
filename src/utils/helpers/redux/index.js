import { addFavori, removeFavori } from "../../../store/slices/favori";

export const handleFavori = (dispatch, status, item) => {

  if (status) {
    dispatch(removeFavori(item.id));
  } else {
    dispatch(addFavori(item));
  }

};