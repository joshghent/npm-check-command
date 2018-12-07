'use strict';
const checkCommand = require('../dist/index');

test("It can recognise a single command", () => {
    expect(checkCommand('packages/package1.json', 'test')).toBe(true);
});

test("It matches the full command", () => {
    expect(checkCommand('packages/package2.json', 'build')).toBe(false);
});

test("It removes any prefixed characters in the path if present", () => {
    expect(checkCommand('/packages/package1.json', 'test')).toBe(true);
});
