import {combineReducers, createStore} from "redux";
import {episodesReducer} from "./reducers/episodesReducer";
import {charactersReducer} from "./reducers/charactersReducer";

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
});
const store = createStore(rootReducer);
export {
    store
}
