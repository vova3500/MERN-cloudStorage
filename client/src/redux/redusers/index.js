import { combineReducers } from "redux";

import user from "./user";
import file from "./file";

const rootReduser = combineReducers({
    user,
    file
});

export default rootReduser;