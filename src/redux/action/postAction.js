export const userActionType = {
    SET_POSTS :'SET_POSTS'
}

export const userAction = {
   setPosts:(posts)=>({type:userActionType.SET_POSTS,payload:posts})
}
