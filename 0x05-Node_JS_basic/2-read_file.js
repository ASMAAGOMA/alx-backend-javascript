const fs = require('fs');

function countStudents(pathToFile) {
  try {
    const data = fs.readFileSync(pathToFile, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const fieldCounts = {};
    const fieldLists = {};

    lines.slice(1).forEach((line) => {
      const [name, field] = line.split(',');

      if (!name || !field) {
        return;
      }

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldLists[field] = [];
      }

      fieldCounts[field] += 1;
      fieldLists[field].push(name);
    });

    const totalStudents = Object.values(fieldCounts).reduce((a, b) => a + b, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${fieldLists[field].join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
