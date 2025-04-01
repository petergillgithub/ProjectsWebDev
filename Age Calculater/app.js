const input = document.getElementById("input");
const ageShow = document.getElementById("ageShow");
const calculateAge = document.getElementById("calculateAge");

function inputfun() {
  let birthYear = parseInt(input.value);
  let now = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDay();

  if (isNaN(birthYear)) {
    ageShow.textContent = "Please input your valid birth year!!";
  } else {
    let age = now - birthYear;
    let mm = month;
    let dd = day;
    ageShow.textContent = `Your age is ${age} years and ${mm} Month and ${dd} days old`;
  }
}

calculateAge.addEventListener("click", function () {
  calculateAge.style.color = "red";
  inputfun();
});
