export const encode = str => {
  let count = 1;
  let code = "";
  [...str].forEach((c, i) => {
    if (str[i + 1] !== c) {
      count > 1 ? (code += `${count}${c}`) : (code += `${c}`);
      count = 1;
    } else count++;
  });
  return code;
};

//expect(decode("2A3B4C")).toEqual("AABBBCCCC");

export const decode = str => {};
