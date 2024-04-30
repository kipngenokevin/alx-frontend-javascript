export default function getStudentsByLocation(studentList, city) {
  const students = studentList.filter((student) => student.location === city);
  return students;
}
