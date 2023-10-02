function handleResponseFromAPI(promise) {
  function success() {
    return { status: 200, body: 'Success' };
  }

  function failure() {
    return new Error();
  }

  function log() {
    console.log('Got a response from the API');
  }
  promise
    .then(success, failure)
    .finally(log);
}

export default handleResponseFromAPI;