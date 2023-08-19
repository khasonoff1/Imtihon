const year = prompt("Iltomos yilni kiriting");
function findLeapYear() {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    alert(`${year} ha bu kabissa yili`);
  } else {
    alert(`${year} yo'q bu kabissa yili emas`);
  }
}
findLeapYear();