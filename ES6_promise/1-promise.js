export default function getFullResponseFromAPI(success) {
  let promiseA = 0;
  if (success === true) {
    promiseA = new Promise((resolve) => {
      resolve({ status: 200, body: 'Success' });
    });
  } else if (success === false) {
    promiseA = new Promise((reject) => {
      reject(Error('The fake API is not working currently'));
    });
  }
  return promiseA;
}
