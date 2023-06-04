export default function caesarCipher(str, key) {
    let alphabet = "abcdefghijklmnñopqrstuvwxyz".split(""); //27
    let result = "";
    let string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        let index = alphabet.indexOf(string[i]);
        result += alphabet[(index + key) % 27];
      } else {
        result += " ";
      }
    }
  
    return result;
}