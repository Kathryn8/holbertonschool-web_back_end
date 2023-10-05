export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let returnString = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      const newValue = value.replace(startString, '');
      returnString = returnString.concat('-', newValue);
    }
  }
  return returnString.substring(1);
}
