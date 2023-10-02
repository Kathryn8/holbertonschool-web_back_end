

export default function handleProfileSignup() {
  import('./utils.js')
    .then((utils) => {
      Promise.all([utils.uploadPhoto(), utils.createUser()])
    })
    .then((value) => {
      //console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
      console.log(value)
    })
    .catch((e) => {
      console.log('Signup system offline', e);
    });
}

// import { uploadPhoto, createUser } from './utils';

// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()])
//     .then(([photoResponse, userResponse]) => {
//       console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
//     })
//     .catch(() => {
//       console.log('Signup system offline');
//     });
// }