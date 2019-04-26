import { parseExpression } from "@babel/parser";

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

//expect(decode("12A3B4C")).toEqual("AABBBCCCC");

const decode = str => {
  let countString = "";
  let string = "";
  debugger;
  [...str].forEach((c, i) => {
    if (parseInt(c)) {
      countString += c;
    } else {
      if (isNaN(c)) {
        string += `${c}`;
      } else string += `${c.repeat(parseInt(countString))}`;
    }
  });
  return string;
};

decode("12A3B4C");
