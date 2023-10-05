export default function getStudentIdsSum(studentList) {
  let idsList = [];
  if (Array.isArray(studentList) === true) {
    idsList = studentList.map((x) => x.id);
  }
  const idsSum = idsList.reduce((accumulator, currentValue) => accumulator + currentValue);
  return idsSum;
}
