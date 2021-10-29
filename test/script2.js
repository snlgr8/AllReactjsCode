const fetch = require('node-fetch');

const getPeople = (fetch) => {
  return fetch('http://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return { count: data.count, results: data.results };
    });
};
getPeople(fetch);

module.exports = {
  getPeople,
};
