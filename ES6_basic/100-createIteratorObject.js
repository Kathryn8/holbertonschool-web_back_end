export default function createIteratorObject(report) {
  const employeeList = [];
  const valuesArray = Object.values(report.allEmployees);
  for (const deptList of valuesArray) {
    for (const employee of deptList) {
      employeeList.push(employee);
    }
  }
  return employeeList;
}
