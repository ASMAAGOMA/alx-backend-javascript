export default function getStudentIdsSum(array) {
  return array.reduce((acc, stds) => acc.id || acc + stds.id, 0);
}
