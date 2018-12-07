'use strict';
const checkCommand = require('../dist/index');

test("It can recognise a single command", () => {
    expect(checkCommand('test', 'packages/package1.json')).toBe(true);
});

test("It matches the full command", () => {
    expect(checkCommand('build', 'packages/package2.json')).toBe(false);
});

test("It removes any prefixed characters in the path if present", () => {
    expect(checkCommand('test', '/packages/package1.json')).toBe(true);
});
