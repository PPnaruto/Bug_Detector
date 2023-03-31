import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import logger from "redux-logger";
import { authReducer } from "./Reducers/authReducer";

const combinedData = combineReducers({
    auth:authReducer
})

const store = createStore(combinedData,applyMiddleware(logger));

export default store;

