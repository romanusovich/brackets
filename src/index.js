module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let flag = true;
  while (flag) {
    flag = false;
    for (let bracket in bracketsConfig) {
      for (let i = 0; i <= str.length; i++) {
        if (bracketsConfig[bracket][0] === str[i] && bracketsConfig[bracket][1] === str[i + 1]) {
          let brackets = bracketsConfig[bracket][0] + bracketsConfig[bracket][1];
          str = str.replace(brackets, '');
          
          i = 0;
          flag = true;
        }
      }
    }
  }
  if (str.length === 0) return true;
  else return false;
}
