const initState = {
  users: [
    { id: 1, name: "Ga"},
    { id: 2, name: "Heo"},
    { id: 3, name: "Cho"},
    { id: 4, name: "Meooo"}
  ]
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter(item => item.id !== action.user.id)
      return {
        ...state,
        users
      }
    case "ADD_USER":
      let id = Math.floor(Math.random() * 1000)
      let user = {
        id: id,
        name: `random ${id}`
      }
      return {
        ...state,
        users: [...state.users, user]
      }
    default:
      return state
  }
}

export default rootReducer;
