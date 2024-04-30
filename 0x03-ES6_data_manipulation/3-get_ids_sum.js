export default function getStudentIdsSum(students) {
  const sumIds = students.reduce((accumulator, student) => student.id + student.id, 0);
  return sumIds;
}
