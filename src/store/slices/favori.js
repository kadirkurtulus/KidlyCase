import { createSlice } from '@reduxjs/toolkit'

const favori = createSlice({
  name: 'favori',
  initialState: {
    favoriData: []
  },
  reducers: {
    addFavori: (state, action) => {
      state.favoriData = [...state.favoriData, action.payload]
    },
    removeFavori: (state, action) => {
      let arr = [...state.favoriData].filter(x => x.id != action.payload);
      state.favoriData = arr;
    }
  }
})

export const { addFavori, removeFavori } = favori.actions;

export default favori.reducer