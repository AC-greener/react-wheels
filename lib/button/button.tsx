import React from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
  type?: string
}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, color, type, ...restProps } = props
  const classResult = classes(
    scopedClass(),
    `fake-${type ? type : "text"}`,
    className, "fake-radius",
    color ? `fake-${type ? type : "text"}-${color}`: ""
  )
  const handleBtnClick = (e) => {
    createRipple(e)
  }
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    console.log(circle.style.width, circle.style.left, circle.style.top)
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
  return (
    <button onClick={ handleBtnClick } type="button" className={classResult} {...restProps}>
      <span>{ props.children }</span>
    </button>
  )
}


export default Icon
