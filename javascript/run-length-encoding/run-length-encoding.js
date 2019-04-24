// export const encode = str => {
//   let strArr = [...str],
//     // char = strArr[0],
//     num = 0,
//     code = [];
//   strArr.reduce((c, i) => {
//     let char = c;
//     if (strArr[strArr[i + 1]] === char) {
//       return num++;
//     }
//   }, "");
// };

// const totalYears = inventors.reduce((total, i) => {
//   return (total += i.passed - i.year);
// }, 0);

// const encode = str => {
//   // return [...str].reduce((code, c, i) => {
//   //   let n = 1;
//   //   let char = c;
//   //   let l = str.length - 1;
//   //   [...str].filter
//   //   return code + n + c;
//   // }, "");
//   return [...str].filter(c => c === "a").length + str[0];
// };

// https://www.rosettacode.org/wiki/Run-length_encoding#JavaScript

// function encode(input) {
//   var encoding = [];
//   var prev, count, i;
//   for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
//     if (input[i] != prev) {
//       encoding.push([count, prev]);
//       count = 1;
//       prev = input[i];
//     } else count++;
//   }
//   encoding.push([count, prev]);
//   return encoding;
// }

const encode = str => {
  let count = 0;
  let start = "";
  return [...str].reduce((code, c) => {
    // console.log(c);
    if (count === 0) {
      count++;
      start = c;
      code += c;
    } else {
      if (c === start) count++;
    }
    return `${count}${code}`;
  }, "");
};

console.log(encode("aaabbacc"));
