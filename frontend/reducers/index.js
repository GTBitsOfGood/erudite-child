function rootReducer(state = {name: '', people:[]}, action) {
    switch (action.type) {
        case "CHANGE_TITLE":
            return Object.assign({}, state, { name: 'dog' });
            break;
        case "GET_PERSON":
            return Object.assign({}, state, { people: action.payload});
        case "POST_PERSON":
            const objHelp = state.people.concat(action.payload);
            return Object.assign({}, state, {people: objHelp});
        case "REMOVE_PERSON":
            const objPeople = state.people;
            const indexToDelete = objPeople.findIndex(
                function(per){
                  return per._id == action.payload;
                }
              )
            const newPeople = objPeople.slice(0, objHelp).concat(objPeople.slice(indexToDelete + 1))
            return Object.assign({}, state, {people: newPeople});
    }
    return state;
}

export default rootReducer;
