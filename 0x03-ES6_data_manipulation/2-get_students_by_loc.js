export default function getStudentsByLocation(array, location) {
  return array.filter((stds) => stds.location === location);
}
