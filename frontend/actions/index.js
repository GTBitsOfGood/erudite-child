"use strict"
import axios from 'axios';
// import * as types from './types';
export function changeName() {
    return {
        type:"CHANGE_TITLE",      
    }
}
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
