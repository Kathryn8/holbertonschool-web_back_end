export default function handleResponseFromAPI(promise) {
  function success() {
    console.log('Got a response from the API');
    return { status: 200, body: 'Success' };
  }

  function failure() {
    console.log('Got a response from the API');
    return { err: {} };
  }
  promise
    .then(success, failure)
    .catch();
}
