// import { response } from "express";

const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");
const h2 = document.querySelector("h2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  p.textContent = "Loading";
  console.log(input.value);
  fetch("http://localhost:3000/weather?" + input.value)
    .then((res) => res.json())
    .then((data) => {
      p.textContent = data[0];
    });
});
