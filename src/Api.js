import React from 'react';



const API_Root = "https://books.google.com/";

function doFetch(...params){
  let error;
  return fetch(...params)
    .then(res =>{
      if(!res.ok){
        error = {code: res.status};
      }
      return res.json();
    })
    .then(data => {
      if(error){
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    })
}

function getResults() {
  return doFetch(API_Root);
}

function makeResults(result){
  const newResult = JSON.stringify(result)
  return getResults(`${API_Root}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newResult
  })
}

export default {
  getResults,
  makeResults,
}