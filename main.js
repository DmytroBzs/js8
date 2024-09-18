import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Follows!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button class="btn" id="counter" type="button">0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
let counter = 0;
setupCounter(document.querySelector("#counter"));
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  counter += 1;
  btn.innerHTML = `Likes-komments ${counter}`;
});
btn.innerHTML = `Likes-komments ${counter}`;
