console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const inp = process.stdin.read();
  if (inp) {
    const name = inp.toString().replace(/\r?\n/g, '');
    console.log(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
