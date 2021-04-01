import { VanillaTilt } from "../../../node_modules/vanilla-tilt/dist/vanilla-tilt.js";

const VanillaTiltJs = () => {
  VanillaTilt.init(document.querySelector(".containe"), {
    max: 25,
    speed: 400
  });
}
export { VanillaTiltJs };
