const number = prompt("Iltimos raqmni kiriting...");
const toString = number.toString();
const toArray = toString.split("");
function specifier(number) {
 const reverse = toArray.reverse();
 const toStringTwo = reverse.join("");
 if (toStringTwo == toString) {
  alert("Ha bu son palindrome son");
 } else  {
  alert("Yo`q bu son palindrome son emas");
 }
}
specifier();
