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

// const transportation = data.reduce((obj, item) => {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});
// console.log(transportation);

// const encode = str => {
//   let count = 1;
//   let letter;
//   return [...str].reduce((code = '', c, i) => {
//     // console.log(c);
//     debugger;
//     if (letter === c) {
//       count++;
//     } else {
//       if (i !== 0) {
//         code += `${count}${letter}`;
//         letter = c;
//         count = 1;
//       } else {
//         letter = c;
//         count = 1;
//       }
//     }
//   }, "");
// };

const encode = str => {
  let count = 1;
  let letter;
  let code = "";
  return [...str].forEach((c, i) => {
    // console.log(c);
    debugger;
    if (letter === c) {
      count++;
    } else {
      if (i !== 0) {
        code += `${count}${letter}`;
        letter = c;
        count = 1;
      } else {
        letter = c;
        count = 1;
      }
    }
  }, "");
};

console.log(encode("aaabbacc"));
