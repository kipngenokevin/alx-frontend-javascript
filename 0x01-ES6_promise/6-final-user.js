import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const firstPromise = signUpUser(firstName, lastName);
  const secondPromise = uploadPhoto(fileName);

  return Promise.allSettled([firstPromise, secondPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
