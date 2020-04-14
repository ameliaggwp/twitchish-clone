import { SIGN_OUT, SIGN_IN } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};
//Actual state gets altered in the reducer. The action just indicates WHAT we're trying to do. Reducer executes it.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
