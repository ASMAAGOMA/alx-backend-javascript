export default function getStudentIdsSum(array) {
  return array.reduce((acc, stds) => acc + stds.id, 0);
}
