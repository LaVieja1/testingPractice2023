export default function reverseString(str) {
    if (!str) return 'Not a string';

    let revStr = str.split('').reverse().join('');
    return revStr;
}