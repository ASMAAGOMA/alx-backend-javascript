export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const array = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      array.push(element.slice(startString.length));
    }
  });
  return array.join('-');
}
