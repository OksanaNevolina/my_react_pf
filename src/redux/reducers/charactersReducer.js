import {charactersActionTypes} from "../actions/charactersAction";

const initialState = {
    characters: []
}

const charactersReducer = (state = initialState , action)=>{
switch (action.type) {
    case charactersActionTypes.SETC:
        return{
            ...state,characters: action.payload
        }
    default :
        return state

}
}
export {
    charactersReducer
}