const heading1 = document.querySelector(".h1");
const heading2 = document.querySelector(".h2");
const heading3 = document.querySelector(".h3");

const text = document.querySelector(".text");
const result = document.querySelector(".result");

result.innerHTML = text.value;
heading1.addEventListener("click", () => {
  // console.log(text.value);
  result.innerHTML = `<h1>${text.value}</h1>`;
  // console.log(result.innerHTML);
});
heading2.addEventListener("click", () => {
  // console.log(text.value);
  result.innerHTML = `<h2>${text.value}</h2>`;
  // console.log(result.innerHTML);
});
heading3.addEventListener("click", () => {
  // console.log(text.value);
  result.innerHTML = `<h3>${text.value}</h3>`;
  // console.log(result.innerHTML);
});
//https://8702p7.csb.app/
