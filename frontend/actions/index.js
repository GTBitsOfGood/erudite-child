"use strict"
import axios from 'axios';
import b64DecodeUnicode from 'jwt-decode'
// import * as types from './types';
export function changeName() {
    return {
        type:"CHANGE_TITLE",      
    }
}
/*
API calls for  About Us and About Form Pages
----------------------------------------------
*/
export function postPerson(per){
    return function(dispatch){
      axios.post("/api/person", per)
        .then(function(response){
          dispatch({type:"POST_PERSON", payload:response.data})
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }

export function postSponsor(per){
    return function(dispatch){
      axios.post("/api/sponsor", per)
        .then(function(response){
          dispatch({type:"POST_SPONSOR", payload:response.data})
        })
        .catch(function(err){
          console.log(err);
        })
    }
  }

export function getPerson(){
  return function(dispatch){
    axios.get("/api/person")
      .then(function(response){
        dispatch({type:"GET_PERSON", payload:response.data})
      })
      .catch(function(err){
        console.log(err);
      })
  }
}
export function getSponsors(){
  return function(dispatch){
    axios.get("/api/sponsors")
      .then(function(response){
        dispatch({type:"GET_SPONSORS", payload:response.data})
      })
      .catch(function(err){
        console.log(err);
      })
  }
}

export function removePerson(id){
  return function(dispatch){
    axios.delete("/api/person/"+id)
      .then(function(response){
        dispatch({type:"REMOVE_PERSON", payload:response.data})
      })
      .catch(function(err){
        console.log(err);
      })
  }
}

export function removeSponsor(id){
  return function(dispatch){
    axios.delete("/api/person/"+id)
      .then(function(response){
        dispatch({type:"REMOVE_SPONSOR", payload:response.data})
      })
      .catch(function(err){
        console.log(err);
      })
  }
}
/*
------------------------------------------------
*/

/*
Sign Up API Calls
-------------------------------------------------
*/
export function signUp(userData){
  return function(dispatch){
    axios.post("/api/signup/",userData)
      .then(function(response){
        dispatch({type:"ADD_USER", payload:response.data})
      })
      .catch(function(err){
        console.log(err);
      })
  }
}
/*
------------------------------------------------
*/

/*
Sign In API Calls
-------------------------------------------------
If the user is valid, the server respons with a 
signed token. The token needs to be set into local
storage of the browser. It dispatches SET_CURRENT_USER
to save the data from the json web token into the 
redux store.
*/
export function signIn(userData){
  return function(dispatch){
    axios.post("/api/signin/", userData)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('jwt', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser((b64DecodeUnicode(token))))
      })
      .catch(function(err){
        console.log(err);
      })
  }
}
/*
------------------------------------------------
*/


/*
Function to set the user as authorized or not.
Either set the decoded token or an empty object 
{} to tell the redux store the state of authentication
to the redux store form the json web token and 
local storage.

This function may be out of place. It potentitally
could go into a seperate file.
-------------------------------------------------
*/
export function setCurrentUser(user){
  return {
    type: "SET_CURRENT_USER",
    user: user
  }
}

/*
Removes json web token from browser.
Deletes the Authroization header for request 
which usually contains the token. 
Updates the redux store with an empty object
as a user.
------------------------------------------------
*/
export function logout() {
  return dispatch =>{
    localStorage.removeItem('jwt');
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
  }
}
/*
Store the token on all requests if there is a token.
Important for server side protection of routes. 
*/
export default function setAuthorizationToken(token) {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
