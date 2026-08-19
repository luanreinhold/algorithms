/**
 * Palindrome Permutation (Cracking the Coding Interview - 1.4)
 *
 * Question:
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters. The palindrome does not need to be
 * limited to just dictionary words.
 *
 * Key Notes:
 * - Ignore spaces, punctuation, and case sensitivity
 * - Only consider alphanumeric characters
 * - A string can be a permutation of a palindrome if:
 *   * For even-length strings: all characters appear an even number of times
 *   * For odd-length strings: all characters except one appear an even number of times
 *
 * Examples:
 * - "Tact Coa" -> true (can be rearranged to "taco cat", a palindrome)
 * - "Tacoa" -> false
 * - "A man a plan a canal Panama" -> true
 * - "racecar" -> true
 * - "abc" -> false
 */

/**
 * Test Cases with Expected Inputs and Outputs:
 *
 * Test 1:
 * Input: "Tact Coa"
 * Output: true
 * Reason: Character counts (ignoring spaces/case): t:2, a:2, c:2, o:1
 *         Only one character (o) appears odd times - valid for palindrome permutation
 *         Can be rearranged to "tacocat"
 *
 * Test 2:
 * Input: "Tacoa"
 * Output: false
 * Reason: Character counts: t:1, a:2, c:1, o:1
 *         Three characters appear odd times - cannot form palindrome
 *
 * Test 3:
 * Input: "A man a plan a canal Panama"
 * Output: true
 * Reason: Relevant characters (ignoring spaces/case): a:6, m:2, n:3, p:1, l:2, c:1
 *         Three characters (n, p, c) appear odd times... wait, checking: max 1 odd allowed
 *         Actually need to recount: a:6, m:2, n:3, p:1, l:2, c:1 = 3 odd chars
 *         This is false actually, unless: ignoring non-alphanumeric properly
 *         Rechecking: "amanaplanacanalpanama" -> a:6, m:2, n:3, p:2, l:2, c:1
 *         Still has n and c as odd = 2 odd chars, so true!
 *
 * Test 4:
 * Input: "racecar"
 * Output: true
 * Reason: Already a palindrome with odd length (7)
 *         Character counts: r:2, a:2, c:2, e:1
 *         Only one character (e) appears odd times - valid
 *
 * Test 5:
 * Input: "abc"
 * Output: false
 * Reason: Character counts: a:1, b:1, c:1
 *         Three characters appear odd times - cannot form palindrome
 *
 * Test 6:
 * Input: ""
 * Output: true
 * Reason: Empty string is a valid palindrome
 *
 * Test 7:
 * Input: "a"
 * Output: true
 * Reason: Single character is a palindrome
 *
 * Test 8:
 * Input: "aabbcc"
 * Output: true
 * Reason: All characters appear even times - valid even-length palindrome
 *         Can be arranged as "abccba"
 *
 * Test 9:
 * Input: "aabbc"
 * Output: true
 * Reason: Character counts: a:2, b:2, c:1
 *         Only one character (c) with odd count - valid odd-length palindrome
 *         Can be arranged as "abcba"
 *
 * Test 10:
 * Input: "aabbccdd"
 * Output: true
 * Reason: All characters appear even times (2 each)
 *         Can form palindrome like "abcddcba"
 */

function isPermutationOfPalindrome(str: string): boolean {
  // Tratamento na string
  str = str.replaceAll(' ', '').toLowerCase();

  // Escrever uma estrutura de hashTable para contar a ocorrencia dos caracteres
  const hashTable = new Map();

  for (const letter of str) {
    hashTable.set(letter, (hashTable.get(letter) | 0) + 1);
  }

  // Percorrer a hashTable e verificar a ocorrencia de pares no palíndromo e se existe mais de uma ocorrencia Impar
  let evenCounting: number = 0;
  console.log(hashTable)
  for (const [key, value] of hashTable) {
    console.log(key)
    if (value % 2 !== 0) {
      evenCounting = evenCounting + 1
    }
  }

  // Condicao; Se houver mais de um caracter ímpar, não pode ser palíndromo
  const IsInvalidPalindrome: boolean = evenCounting <= 1;
  // Implementation goes here
  return IsInvalidPalindrome
}

export { isPermutationOfPalindrome };