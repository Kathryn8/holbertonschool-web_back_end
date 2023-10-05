export default function updateUniqueItems(map) {
  map.forEach((value, key, myMap) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
  return map;
}
