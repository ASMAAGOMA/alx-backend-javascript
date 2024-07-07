export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((stds) => stds.location === city).map((stds) => {
    const newGrade = newGrades.find((hmmm) => hmmm.studentId === stds.id);
    return {
      id: stds.id,
      firstName: stds.firstName,
      location: stds.location,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
