export type TypebreakPoint = "mobile";

const mapperBreakPoints: { [key in TypebreakPoint]: string } = {
  mobile: "(max-width: 599.9px)",
};

export const matchBreakPoint = (
  breakPoint: TypebreakPoint,
  match: () => void,
  nomatch?: () => void
) => {
  const matchBreakPoint = window.matchMedia(mapperBreakPoints[breakPoint]);
  match();
  const handler = () => {
    if (matchBreakPoint) {
      match();
    } else {
      nomatch && nomatch();
    }
  };
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
};
