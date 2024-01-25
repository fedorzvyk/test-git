const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

const btnsQuery = document.querySelectorAll('button');
console.log(btnsQuery);

const oneBtn = document.querySelector('button');

btnsQuery.forEach(btn => {
  console.log(btn);
});

console.log(oneBtn);
