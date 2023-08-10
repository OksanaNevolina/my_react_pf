const charactersActionTypes = {
    SETC : "SETC"
}

const charactersAction ={
    set : (payload) => ({type : charactersActionTypes.SETC,payload })
}
export {
    charactersAction,
    charactersActionTypes
}