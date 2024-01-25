const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  'Takesi',
  'Sam',
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const firstTeam = [];
  const secondTeam = [];
  const tirdTeam = [];
  const rest = [];
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      firstTeam.push(arr[i]);
    } else if (i < 6) {
      secondTeam.push(arr[i]);
    } else if (i < 9) {
      tirdTeam.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  console.log([
    firstTeam,
    secondTeam,
    tirdTeam,
    `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
  ]);
  return [
    firstTeam,
    secondTeam,
    tirdTeam,
    `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
  ];
}

sortStudentsByGroups(students);

[
  ['Andrew', 'Ann', 'Bernard'],
  ['Cris', 'Josh', 'Mark'],
  ['Peter', 'Sam', 'Sandra'],
  'Оставшиеся студенты: Takesi, Somebody',
];
