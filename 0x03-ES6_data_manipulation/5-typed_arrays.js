export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const hmmm = new ArrayBuffer(length);
  const view = new Int8Array(hmmm);
  view[position] = value;
  return new DataView(hmmm);
}
