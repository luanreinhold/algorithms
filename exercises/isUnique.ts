// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// Input: "abcdefg"
// Output: true
// // every character appears once

// Input: "hello"
// Output: false
// // 'l' appears twice
export default function isUnique(text: string): boolean {
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) {
        return false;
      }
    }
  }

  return true;
}
