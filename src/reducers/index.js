import { combineReducers } from "redux";
//this component is called reducer in redux-form and must be imported with its exact name, but we can rename it with "as" to be less connfusing
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
