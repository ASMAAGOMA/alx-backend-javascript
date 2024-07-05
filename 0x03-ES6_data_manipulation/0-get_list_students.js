export default function getListStudents() {
  const objArr = [];
  const std1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const std2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const std3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  objArr.push(std1, std2, std3);
  return objArr;
}
