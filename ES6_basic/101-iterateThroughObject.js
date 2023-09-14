export default function iterateThroughObject(reportWithIterator) {
  let allNames = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    if (i === 0) {
      allNames = reportWithIterator[i];
    } else {
      allNames = `${allNames} | ${reportWithIterator[i]}`;
    }
  }
  return allNames;
}
