function adjustShift(shift) {
  return ((shift % 26) + 26) % 26;
}

function rotate(charCode, shift) {
  return (charCode + shift) % 26;
}

function substituteCharCode(charCode, shift) {
  if (charCode >= 65 && charCode <= 90) {
    return rotate(charCode - 65, shift) + 65;
  }

  if (charCode >= 97 && charCode <= 122) {
    return rotate(charCode - 97, shift) + 97;
  }

  return charCode;
}

const encode = function (text, shift, action = "encode") {
  if (action === "decode") {
    shift = -1 * shift;
  }
  shift = adjustShift(shift);

  let res =
    String.fromCharCode(
      ...text
        .split("")
        .map((char) => substituteCharCode(char.charCodeAt(), shift))
    ) + "\n";
  return res;
};

module.exports = {
  encode,
};
