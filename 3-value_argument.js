#!/usr/bin/node

// process.argv[2] is the first argument after 'node' and script name
const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
