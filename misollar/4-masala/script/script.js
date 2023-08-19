const number = [1, -4, 4, -2, 4, -5];
function findNegative(array) {
  const newArray = [];
  number.forEach((element) => {
    if (element < 0) {
      newArray.push(element);
    }
  });
  console.log(newArray);
}
findNegative(number);