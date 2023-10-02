import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [user, photo] = await Promise.allSettled([userPromise, photoPromise]);

    return [
      {
        status: user.status,
        value: user.status === 'fulfilled' ? user.value : user.reason,
      },
      {
        status: photo.status,
        value: photo.status === 'fulfilled' ? photo.value : photo.reason,
      },
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default handleProfileSignup;
