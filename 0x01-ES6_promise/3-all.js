import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const name = createUser();
  Promise.all([photo, name])
    .then((results) => {
      const phot = results[0];
      const nam = results[1];
      console.log(`${phot.body} ${nam.firstName} ${nam.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
