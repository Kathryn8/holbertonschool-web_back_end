export default function getStudentsByLocation(studentList, specificCity) {
  let studentsInCity = [];
  if (typeof specificCity !== 'string') {
    throw new Error('please specify a city');
  }
  if (Array.isArray(studentList) === true) {
    studentsInCity = studentList.filter((student) => student.location === specificCity);
  }
  return studentsInCity;
}
