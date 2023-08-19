const array = [7, 2, 6, -1, -6, -5];

function sorter(array) {
 let count = 0;
 let sum = 0;
 array.filter((element) => {
  if (element < 0) {
   sum += element;
  } else {
   count++;
  }
 });
 alert(`Musbat raqmlar soni ${count}`);
 alert(`Manfiy raqmlar yig'indisi ${sum}`);
}
sorter(array);
