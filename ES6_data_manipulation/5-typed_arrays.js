export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const uint8 = new Uint8Array(buffer);
  uint8[position] = value;
  const dataView = new DataView(buffer);
  return dataView;
}
