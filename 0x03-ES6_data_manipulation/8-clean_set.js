export default function cleanSet(set, startString) {
  const array = [];
  set.forEach((element) => {
    if (startString === '') {
      return;
    } if (element.startsWith(startString)) {
      array.push(element.slice(startString.length));
    }
  });
  return array.join('-');
}
