import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promiseA = uploadPhoto();
  const promiseB = createUser();
  return Promise.all([promiseA, promiseB])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
