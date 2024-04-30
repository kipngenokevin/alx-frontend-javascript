export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city).map((student) => {
    for (let i = 0; i < newGrades.length; i += 1) {
      if (student.id === newGrades[i].studentId) {
        return { ...student, grade: newGrades[i].grade };
      }
    }
    return { ...student, grade: 'N/A' };
  });
}
