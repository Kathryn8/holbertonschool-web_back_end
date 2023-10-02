export default function handleResponseFromAPI(promise) {
  function success() {
    console.log('Got a response from the API');
    return { body: 'success', status: 200 };
  }

  function failure() {
    console.log('Got a response from the API');
    return { err: {} };
  }
  return promise
    .then(success, failure)
    .catch();
}
