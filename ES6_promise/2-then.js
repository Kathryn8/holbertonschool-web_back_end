export default function handleResponseFromAPI(promise) {
  function success() {
    console.log('Got a response from the API');
    return { body: 'Success', status: 200 };
  }

  function failure() {
    console.log('Got a response from the API');
    return { err: {} };
  }
  promise
    .then(success, failure)
    .catch();

  export default handleResponseFromAPI;
