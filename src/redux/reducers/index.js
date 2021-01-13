import { combineReducers } from "redux";
import tickets from "./tickets"
import loader from "./loader";

const allReducers = combineReducers({

    tickets,
    loader
})

export default allReducers;