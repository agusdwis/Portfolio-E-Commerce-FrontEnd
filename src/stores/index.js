import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers({
    user: userReducer,
    book: bookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    // console.warn("cek state store", store.getState());
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55',
        store.getState());
});
export default store;
