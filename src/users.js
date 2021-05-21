const apiUrl = 'https://reqres.in/api';
// return promise

function load() {
  const url = `${apiUrl}/users`;
  return fetch(url)
    .then((res) => {
      //not 200 response
      if (!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .then((results) => results.data)

    .catch((err) => {
      console.warn(err);
    });
}

module.exports.load = load;
