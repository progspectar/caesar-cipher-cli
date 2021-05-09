const checkParameters = function ({ action, shift, input, output }) {
  if (!action) {
    console.error('You should specify parameter "action"!\n');
    process.exit(1);
  }

  if (action !== "encode" && action !== "decode") {
    console.error('Wrong parameter "action". Must be "encode" or "decode".\n');
    process.exit(1);
  }

  if (!shift) {
    console.error('You should specify parameter "shift". Must be integer.\n');
    process.exit(1);
  }

  if (typeof shift !== "number" || !Number.isInteger(shift)) {
    console.error("Shift value is incorrect. Must be non-zero integer.\n");
    process.exit(1);
  }
};

module.exports = {
  checkParameters,
};
