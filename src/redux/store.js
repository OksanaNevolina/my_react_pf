import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {postsReduser} from "./redusers/postsReduser";

const rootReducer = combineReducers({
    postsReduser:postsReduser,
    // users : usersReduser
})
const composeEnhancers = composeWithDevToolsDevelopmentOnly(
    {
        trace: true,
        traceLimit: 25

    }
)
const store = createStore(rootReducer,composeEnhancers());

export {
    store
}