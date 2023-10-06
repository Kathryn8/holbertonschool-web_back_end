export default function updateStudentGradeByCity(studentList, city, newGrades) {
  let studentsInCity = [];
  if (typeof city !== 'string') {
    throw new Error('please specify a city');
  }
  if (Array.isArray(studentList) === true) {
    studentsInCity = studentList.filter((student) => student.location === city);
  }
  const newStudentList = studentsInCity
    .map((x) => {
      const studentObject = x;
      try {
        studentObject.grade = newGrades.filter((y) => y.studentId === studentObject.id)[0].grade;
      } catch (e) {
        studentObject.grade = 'N/A';
      }
      return x;
    });
  return newStudentList;
}
