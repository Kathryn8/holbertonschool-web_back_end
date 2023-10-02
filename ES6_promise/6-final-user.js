import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseA = uploadPhoto(fileName);
  const promiseB = signUpUser(firstName, lastName);

  return Promise.all([promiseA, promiseB])
    .then((data) => {
      console.log(data);
    })
    .catch(() => { })
    .finally((data) => {
      return { status: this, value: data };
    });
}
