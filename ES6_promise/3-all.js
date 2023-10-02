import * as utils from './utils';

export default function handleProfileSignup() {
  return Promise.all([utils.uploadPhoto(), utils.createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
