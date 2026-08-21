/*
 * 1.6 String Compression
 *
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string a a b c c c c c a a a would become a 2 b l c 5 a 3 , If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * EXEMPLO 1:
 * Input: "aabcccccaaa"
 * Output: "a2b1c5a3"
 * Explicação: Caracteres consecutivos repetidos: 2 'a's, 1 'b', 5 'c's e 3 'a's.
 *             A compressão (11 caracteres) retorna a versão comprimida.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * EXEMPLO 2:
 * Input: "abcdef"
 * Output: "abcdef"
 * Explicação: Cada caractere é único. A compressão "a1b1c1d1e1f1" (12 caracteres)
 *             seria maior que o original (6 caracteres), portanto retorna original.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * EXEMPLO 3:
 * Input: "aaaaaaaaaa" (10 'a's)
 * Output: "a10"
 * Explicação: Todos os caracteres são iguais. A compressão "a10" (3 caracteres)
 *             é menor que o original (10 caracteres), portanto retorna comprimida.
 */

export default function stringCompressor(text: string): string {
  let newString: string = "";
  let counter: number = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i + 1] === text[i]) {
      counter++;
    }
    if (text[i] !== text[i + 1]) {
      newString += `${text[i]}${counter}`;
      counter = 1;
    }
  }

  const optimalString = minimalStringValidator({ text, compressedString: newString });
  return optimalString;
}

function minimalStringValidator({
  text,
  compressedString,
}: {
  text: string;
  compressedString: string;
}): string {
  return compressedString.length < text.length ? compressedString : text;
}
