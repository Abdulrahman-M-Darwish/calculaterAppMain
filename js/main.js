const input = document.querySelector(".slider");

function deleteNum() {
  calc.text.value = calc.text.value.substring(0, calc.text.value.length - 1);
  console.log(input.value);
}

input.addEventListener("change", () => {
  document.body.classList = "theme" + (+input.value + 1);
  console.log(+input.value + 1);
});
