import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.items.find(u => u.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(u => u.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer