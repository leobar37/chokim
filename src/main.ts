import "./asssets/scss/main.scss";
// import "bulma"

import Glide from "@glidejs/glide";

new Glide(".glide", {
  perView: 3,
  type: "slider",
  focusAt: 1,
  gap: 10,
  bound: true,
}).mount();
