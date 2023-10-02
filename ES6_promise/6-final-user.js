import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseA = uploadPhoto(fileName);
  const promiseB = signUpUser(firstName, lastName);

  return Promise.allSettled([promiseA, promiseB])
    .then((data) => {
      console.log(data);
    })
    .catch(() => { })
    .finally(([user, photo]) => [
      {
        status: user.status,
        value: user.status === 'fulfilled' ? user.value : user.reason,
      },
      {
        status: photo.status,
        value: photo.status === 'fulfilled' ? photo.value : photo.reason,
      }]);
}
