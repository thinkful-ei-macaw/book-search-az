const API_Root = "https://books.google.com/";

function getResults(...params) {
  return fetch(...params)
    .then(res => res.json)
    .then(resultsJson => function (resultsJson) {

    })
  return res.json
}