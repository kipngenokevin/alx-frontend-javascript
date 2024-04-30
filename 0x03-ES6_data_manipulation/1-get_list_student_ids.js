export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) { return []; }
  const idArray = objArray.map((student) => student.id);
  return idArray;
}
