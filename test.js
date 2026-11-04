const assert = require('assert');

// Test 1: Basic addition
const result = 5 + 5;

assert.strictEqual(result, 10);

console.log("Test passed: Addition works correctly!");

// Test 2: String validation
const name = "GitHub Actions";

assert.strictEqual(typeof name, "string");

console.log("Test passed: String validation works!");