export default function cleanSet(set, startString) {
  if (startString === '' || startString === null || typeof startString !== 'string') {
    return '';
  }
  const returnList = [];
  for (const value of set) {
    if (value !== undefined && value.startsWith(startString)) {
      const newValue = value.replace(startString, '');
      returnList.push(newValue);
    }
  }
  return returnList.join('-');
}
