export default function handleResponseFromAPI(promise) {
  function success() {
    // console.log('success');
    return { status: 200, body: 'Success' };
  }

  function failure() {
    // console.log('failure')
    return new Error();
  }
  promise
    .then(success, failure)
    .finally(() => { console.log('Got a response from the API'); });
}