export default function SessionReducer(state={loading: false, signedIn: false, currentUser: null}, action){
  switch (action.type) {
    case "SIGNING_IN":
      return Object.assign({}, state, {loading: true});
    case "SIGNED_IN":
      return Object.assign({}, state, {loading: false, signedIn: true, currentUser: action.user});
    default:
      return state;
  }
}
