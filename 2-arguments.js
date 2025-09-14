#!/usr/bin/node

// process.argv contains: [ 'node', '/path/to/script', ...arguments ]
const argsCount = process.argv.length - 2; // subtract first two elements (node + script path)

if (argsCount === 0) {
  console.log('No argument');
} else if (argsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
