import { readFileSync } from "fs";
const callsites = require('callsites');

/**
 * Checks whether a command is present in the package.json file that you pass to it
 * @param  {string} file - the path to the package.json file
 * @param  {string} command - the command to check for presence
 * @returns boolean
 */
module.exports = (file: string, command: string): boolean => {
    const relativeDir: string = callsites()[1].getFileName().replace(/[^/]+$/, "").replace(/\/$/, "");
    const packageJSON: any = JSON.parse(readFileSync(`${relativeDir}/${file}`, "utf8"));
    return packageJSON.scripts ? Object.keys(packageJSON.scripts).includes(command) : false;
}
