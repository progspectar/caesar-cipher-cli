const fs = require("fs");
const { Transform, pipeline } = require("stream");
const { encode } = require("./modules/encode_decode");
const { checkParameters } = require("./modules/check_parameters");

const parameters = require("./modules/parse_parameters");

checkParameters(parameters);

pipeline(
  getReadableStream(parameters.input),
  getTransformStream(parameters),
  getWritableStream(parameters.output),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

function getReadableStream(path) {
  if (path === undefined) {
    console.log("Enter your message: ");
    return process.stdin;
  } else {
    try {
      fs.accessSync(path, fs.constants.R_OK);
      return fs.createReadStream(path);
    } catch (err) {
      console.error(
        `Error: input file doesn't exist or is not accessible. Path to file: '${path}'`
      );
      process.exit(1);
    }
  }
}

function getTransformStream(parameters) {
  return (transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(
        encode(chunk.toString("utf8"), parameters.shift, parameters.action)
      );
      callback();
    },
  }));
}

function getWritableStream(path) {
  if (path) {
    try {
      fs.accessSync(path, fs.constants.W_OK);
      return fs.createWriteStream(path, {
        flags: "a",
      });
    } catch (err) {
      console.error(
        `Error: output file doesn't exist or is not accessible. Path to file: '${path}'`
      );
      process.exit(1);
    }
  }
  return process.stdout;
}
