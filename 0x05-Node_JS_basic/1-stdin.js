console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const inp = process.stdin.read();
  if (inp) {
    console.log(`Your name is: ${inp}\n`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
