// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// p a l e , p i e - > t r u e
// p a l e s , p a l e - > t r u e
// p a l e , b a l e - > t r u e
// p a l e , b a k e - > f a l s

function oneWay(str1: string, str2: string): boolean {
  const arrayString = str1.split("");

  // Ação 1: REMOVER um caractere
  for (let i = 0; i < str1.length; i++) {
    const arrayString = str1.split("");
    const removedString = [...arrayString.slice(0, i), ...arrayString.slice(i + 1)];

    if (removedString.join("") === str2) {
      return true;
    }
  }

  // Ação 2: SUBSTITUIR um caractere (substituir posição i com cada char de str2)
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      const replacedArray = [...arrayString];
      replacedArray[i] = str2[j];
      if (replacedArray.join("") === str2) {
        return true;
      }
    }
  }

  // Ação 3: INSERIR um caractere (inserir em cada posição, cada char de str2)
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      const insertedArray = [...arrayString.slice(0, i), str2[j], ...arrayString.slice(i)];
      if (insertedArray.join("") === str2) {
        return true;
      }
    }
  }

  return false;
}
export default { oneWay };
