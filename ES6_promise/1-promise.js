export default function getFullResponseFromAPI(success) {
  const returnPromise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    }
    if (success === false) {
      reject(Error('The fake API is not working currently'));
    }
  });
  return returnPromise;
}
