
const initialState = {
  posts: []
}
const postsReduser =(state = initialState,action)=> {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state

    }

}
export {
    postsReduser
}

