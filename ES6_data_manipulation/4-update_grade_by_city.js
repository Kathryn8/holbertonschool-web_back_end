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
      try {
        x["grade"] = newGrades.filter((y) => y.studentId === x.id)[0].grade;
      } catch {
        x["grade"] = 'N/A';
      }
      return x;
    });

  return newStudentList;
}
