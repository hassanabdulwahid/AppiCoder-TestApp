const TOGGLE_FAVORITE = 'favorites/toggleFavorite'

const initialState = { items: [] }

export const toggleFavorite = (user) => ({ type: TOGGLE_FAVORITE, payload: user })

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const exists = state.items.find(u => u.id === action.payload.id)
      return {
        ...state,
        items: exists
          ? state.items.filter(u => u.id !== action.payload.id)
          : [...state.items, action.payload],
      }
    }
    default:
      return state
  }
}