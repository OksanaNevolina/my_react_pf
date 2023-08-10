import {combineReducers, createStore} from "redux";
import {episodesReducer} from "./reducers/episodesReducer";
import {charactersReducer} from "./reducers/charactersReducer";

const rootRaducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
});
const store = createStore(rootRaducer);
export {
    store
}
