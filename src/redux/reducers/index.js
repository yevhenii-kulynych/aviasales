import { combineReducers } from "redux";
import tickets from "./tickets"
import loader from "./loader";

const allRedusers = combineReducers({

    tickets,
    loader
})

export default allRedusers;