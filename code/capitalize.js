export default function capitalize(str) {
    if (!str) return "Not a string";
    
    let string = str.charAt(0).toUpperCase() + str.slice(1);
    return string;
}