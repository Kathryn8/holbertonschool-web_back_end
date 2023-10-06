export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, myMap) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
  return map;
}
