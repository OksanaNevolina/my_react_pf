
const episodesActionTypes = {
SET :'SET'
}

const episodesAction = {
    set : (payload)=> ({type: episodesActionTypes.SET,payload})
}
export {
    episodesAction,
    episodesActionTypes
}