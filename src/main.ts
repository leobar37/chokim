import "./asssets/scss/main.scss";
// import "bulma"

import Glide from "@glidejs/glide";

import { burguerMenuFeature } from "./ts/burguer";
import { matchBreakPoint } from "./ts/utils";
import SmoothScroll from "smooth-scroll";

const isPrincipal = document.body.classList.contains("principal");
import AOS from "aos";
import "aos/dist/aos.css";
let $socialComponent = document.querySelector(".social") as HTMLElement;
let $header = document.querySelector(".header") as HTMLElement;

const socialFeature = () => {
  matchBreakPoint("mobile", () => {
    document.body.removeChild($socialComponent);
    $header.parentNode?.insertBefore($socialComponent, $header.nextSibling);
    // update reference
    $socialComponent = document.querySelector(".social") as HTMLElement;
    $socialComponent.classList.add("mobile");
  });
};

if (isPrincipal) {
  new Glide(".glide", {
    perView: 3,
    type: "slider",
    gap: 10,
    bound: true,
    breakpoints: {
      500: {
        perView: 2,
      },
    },
  }).mount();
  new SmoothScroll('a[href*="#"]', {
    speed: 400,
    offset: 250,
  });
  socialFeature();
  AOS.init({ disable: "mobile" });
}

// window.addEventListener("DOMContentLoaded", () => {

// });
burguerMenuFeature();
