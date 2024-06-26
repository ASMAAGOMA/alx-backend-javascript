import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const namePromise = createUser();

  Promise.all([photoPromise, namePromise])
    .then((results) => {
      const photo = results[0];
      const name = results[1];
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
