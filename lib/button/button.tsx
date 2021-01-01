import React from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
  type?: string
  disabled?: boolean
}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, color, type, disabled, ...restProps } = props
  console.log(disabled)
  const classResult = classes(
    scopedClass(),
    `fake-${type}`,
    disabled? `fake-disabled` : '',
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
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
  return (
    <button 
      disabled={ disabled ? true : false} 
      onClick={ handleBtnClick } 
      type="button" 
      className={classResult} 
      {...restProps}>
      <span>{ props.children }</span>
    </button>
  )
}

Icon.defaultProps = {
  type: 'text'
}


export default Icon
