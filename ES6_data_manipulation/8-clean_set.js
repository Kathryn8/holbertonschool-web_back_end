export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let returnList = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      const newValue = value.replace(startString, '');
      returnList.push(newValue);
    }
  }
  // console.log(returnList);
  return returnList.join('-');
}
