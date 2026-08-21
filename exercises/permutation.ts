/**
 * Permutation Check: Given two strings, write a method to decide if one is a
 * permutation of the other.
 *
 * A permutation is a rearrangement of characters. Two strings are permutations
 * of each other if they contain exactly the same characters with the same
 * frequencies, but in a different order.
 *
 * Note: This is the same as checking if two strings are anagrams of each other.
 * The only difference is terminology — "permutation" is the technical term,
 * "anagram" is the linguistic term for meaningful words.
 *
 * Example:
 * Input: s1 = "abc", s2 = "bca"
 * Output: true
 * Explanation: Both strings contain 'a', 'b', and 'c' exactly once. They are
 * permutations of each other.
 *
 * Input: s1 = "abc", s2 = "def"
 * Output: false
 * Explanation: The strings contain different characters, so one cannot be a
 * permutation of the other.
 *
 * Input: s1 = "aab", s2 = "aba"
 * Output: true
 * Explanation: Both contain two 'a's and one 'b'. They are permutations of
 * each other.
 */

export default function isPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  const hashTableS1 = new Map();
  const hashTableS2 = new Map();

  for (const letter of s1) {
    hashTableS1.set(letter, (hashTableS1.get(letter) | 0) + 1);
  }

  for (const letter of s2) {
    hashTableS2.set(letter, (hashTableS2.get(letter) | 0) + 1);
  }

  for (const key of hashTableS1.keys()) {
    console.log(hashTableS1.get(key));
    if (hashTableS1.get(key) !== hashTableS2.get(key)) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation("aab", "ada"));
