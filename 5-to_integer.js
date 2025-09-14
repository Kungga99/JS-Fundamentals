#!/usr/bin/node

const arg = process.argv[2];              // first argument
const num = Number(arg);                  // convert to number

if (Number.isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
