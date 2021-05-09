const { Command } = require("commander");
const program = new Command();

program.storeOptionsAsProperties(true);
program
  .option("-s, --shift <shift>", "a shift")
  .option("-i, --input <input>", "an input file")
  .option("-o, --output <output>", "an output file")
  .option("-a, --action <action>", "an action: encode/decode");

const options = program.parse(process.argv).opts();
options.shift = Number(options.shift);

module.exports = options;
