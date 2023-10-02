function handleResponseFromAPI(promise) {
  function success() {
    return { body: 'success', status: 200 };
  }
  function failure() {
    return new Error();
  }
  function log() {
    console.log('Got a response from the API');
  }
  return promise
    .then(success)
    .then(failure)
    .finally(log);
}

export default handleResponseFromAPI;
