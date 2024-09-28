import { ButtonHTMLAttributes } from "react";
import "./burger-menu.css";

export default function BurgerMenuButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button id="menu-burger" {...props}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </button>
  );
}
