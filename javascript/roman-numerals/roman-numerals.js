export const toRoman = num => {
  let romNum = "";
  while (num) {
    if (num >= 1000) {
      romNum += "M".repeat(parseInt(num / 1000));
      num %= 1000;
    }
    if (num >= 900) {
      romNum += "CM";
      num %= 900;
    }
    if (num >= 500) {
      romNum += "D";
      num %= 500;
    }
    if (num >= 400 && num < 500) {
      romNum += "CD";
      num %= 400;
    }
    if (num >= 100) {
      romNum += "C";
      num -= 100;
    }
    if (num >= 90 && num < 100) {
      romNum += "XC";
      num %= 90;
    }
    if (num >= 50 && num < 90) {
      romNum += "L";
      num %= 50;
    }
    if (num >= 40 && num < 50) {
      romNum += "XL";
      num %= 40;
    }
    if (num >= 10 && num < 40) {
      romNum += "X";
      num -= 10;
    }
    if (num >= 9 && num < 10) {
      romNum += "IX";
      num %= 9;
    }
    if (num >= 5 && num < 9) {
      romNum += "V";
      num %= 5;
    }
    if (num >= 4 && num < 5) {
      romNum += "IV";
      num %= 4;
    }
    if (num >= 1 && num < 4) {
      romNum += "I";
      num -= 1;
    }
  }
  return romNum;
};
