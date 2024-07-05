export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return (array.map((stds) => stds.id));
}
