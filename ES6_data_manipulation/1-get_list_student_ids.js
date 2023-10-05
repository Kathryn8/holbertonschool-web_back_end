export default function getListStudentIds(studentList) {
  let returnArray = [];
  if (Array.isArray(studentList) === true) {
    returnArray = studentList.map((x) => x.id);
  }
  return returnArray;
}
