let $menu = document.querySelector(".navbar__menu") as HTMLElement;
const $trigger = document.querySelector(
  ".navbar__burguer"
) as HTMLButtonElement;

const $triggerClose = document.querySelector(".navbar__menu__close");

const $containerNavbar = document.querySelector(".navbar__container");

const translateMenu = () => {
  const isMobile = window.matchMedia("(max-width: 599.9px)").matches;
  if (isMobile) {
    document.body.appendChild($menu);
    // document.removeChild($menu);
    // update reference
    $menu = document.querySelector(".navbar__menu") as HTMLElement;
  } else {
    $containerNavbar?.appendChild($menu);
    // update reference
    $menu = document.querySelector(".navbar__menu") as HTMLElement;
  }
};

export const burguerMenuFeature = () => {
  translateMenu();
  window.addEventListener("resize", () => {
    translateMenu();
  });
  $trigger?.addEventListener("click", () => {
    $menu?.classList.toggle("open");
    document.body.style.overflowY = "hidden";
  });
  $triggerClose?.addEventListener("click", () => {
    $menu?.classList.toggle("open");
  });
};
