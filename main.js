let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("button-el");
let ulEl = document.getElementById("ul-el");
let myArray = [];
let oldArray = [];
let deleteBtn = document.querySelector("#delete-el");

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myArray = [];
  render(myArray);
});

function render(array) {
  let x = "";
  for (let i = 0; i < array.length; i++) {
    x += "<li>" + "<a href='#'  target='_blank'>" + array[i] + "</a>" + "</li>";
  }
  ulEl.innerHTML = x;
}
buttonEl.addEventListener("click", function () {
  myArray.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myArray", JSON.stringify(myArray));
  console.log(localStorage.getItem("myArray"));
  render(myArray);
});
