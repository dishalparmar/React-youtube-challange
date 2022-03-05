export const initialState = {
  sidebar: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'sidebar':
      return {
        ...state,
        sidebar: action.toggle
      }
      default:
        return state;
  }
}

export default reducer;
