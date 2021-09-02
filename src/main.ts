import "./asssets/scss/main.scss";
// import "bulma"

import Glide from "@glidejs/glide";
import { burguerMenuFeature } from "./ts/burguer";
import { matchBreakPoint } from "./ts/utils";
new Glide(".glide", {
  perView: 3,
  type: "slider",
  focusAt: 1,
  gap: 10,
  bound: true,
}).mount();

let $socialComponent = document.querySelector(".social") as HTMLElement;
let $header = document.querySelector(".header") as HTMLElement;

const socialFeature = () => {
  matchBreakPoint("mobile", () => {
    console.log($socialComponent);
    document.body.removeChild($socialComponent);

    $header.parentNode?.insertBefore($socialComponent, $header.nextSibling);
    // update reference
    $socialComponent = document.querySelector(".social") as HTMLElement;
    $socialComponent.classList.add("mobile");
  });
};

window.addEventListener("DOMContentLoaded", () => {
  burguerMenuFeature();
  socialFeature();
});
