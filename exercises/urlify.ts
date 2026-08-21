// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

export default function urlify(str: string): string {
  let newString = "";

  for (const letter of str) {
    if (letter === " ") {
      newString += "%20";
    } else {
      newString += letter;
    }
  }

  return newString;
}
