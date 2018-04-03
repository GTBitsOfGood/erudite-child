function rootReducer(
  state = {
    name: "",
    people: [],
    sponsors: [],
    auth: { isAuthenticated: false, user: {} }
  },
  action
) {
  /*
  These should really be split up into different 
  reducers and then combined. 
  */
  switch (action.type) {
    case "CHANGE_TITLE":
      return Object.assign({}, state, { name: "dog" });
      break;
    case "GET_PERSON":
      return Object.assign({}, state, { people: action.payload });
      break;
    case "GET_SPONSORS":
      return Object.assign({}, state, { sponsors: action.payload });
      break;
    case "POST_PERSON":
      const objHelp = state.people.concat(action.payload);
      return Object.assign({}, state, { people: objHelp });
      break;
    case "POST_SPONSOR":
      const sponsorHelp = state.sponsors.concat(action.payload);
      return Object.assign({}, state, { sponsors: objHelp });
      break;
    case "REMOVE_PERSON":
      const objPeople = state.people;
      const indexToDelete = objPeople.findIndex(function(per) {
        return per._id == action.payload;
      });
      const newPeople = objPeople
        .slice(0, objPeople)
        .concat(objPeople.slice(indexToDelete + 1));
      return Object.assign({}, state, { people: newPeople });
      break;
    case "REMOVE_SPONSOR":
      const sponsorCopy = state.sponsors;
      const indexToDeleteSponsor = sponsorCopy.findIndex(function(per) {
        return per._id == action.payload;
      });
      const newSponsorsList = sponsorCopy
        .slice(0, sponsorCopy)
        .concat(sponsorCopy.slice(indexToDeleteSponsor + 1));
      return Object.assign({}, state, { sponsors: newSponsorsList });
      break;
    case "SET_CURRENT_USER":
      //console.log(action.user)
      const setUserObject = {isAuthenticated: !(Object.keys(action.user).length === 0 && (action.user).constructor === Object),user: action.user}
      return Object.assign({}, state, {auth: setUserObject});
      break;
    case "LOGIN_USER":
      console.log(action.payload);
      window.localStorage.setItem("token", action.payload.token);
      return Object.assign({}, state);
      break;
  }
  return state;
}

export default rootReducer;
