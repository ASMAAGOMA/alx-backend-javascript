import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((resuls) => resuls.map((resul) => ({
    status: resul.status,
    value: resul.status === 'fulfilled' ? resul.value : resul.reason,
  })));
}

export default handleProfileSignup;
