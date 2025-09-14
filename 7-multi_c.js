#!/usr/bin/node

const x = Number(process.argv[2]); // convert first argument to number

if (Number.isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
