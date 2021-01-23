import React, { Fragment, ReactNode } from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
  type?: string
  disabled?: boolean
  size?: string
  icon?: ReactNode
  iconposition?: string
}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, color, type, disabled, size, icon, onClick, ...restProps } = props
  const classResult = classes(
    scopedClass(),
    'fake-icon-end',
    `fake-button-${size}`,
    `fake-${type}`,
    disabled? `fake-disabled` : '',
    className,
    "fake-radius",
    color ? `fake-${type}-${color}`: ""
  )
  const handleBtnClick = (e) => {
    createRipple(e)
    onClick && onClick(e)
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
  const Span = () => {
    if(props.icon) {
      if(props.iconposition === 'left') {
        return <Fragment>
          <span className='icon-left'>{props.icon}</span>
          <span>{ props.children }</span>
        </Fragment>
      } else {
        return <Fragment>
          <span>{ props.children }</span>
          <span className='icon-right'>{props.icon}</span>
        </Fragment>
      }
    } else {
      return <span>{ props.children }</span>
    }
  }
  return (
    <button 
      disabled={ disabled ? true : false} 
      onClick={ handleBtnClick } 
      type="button" 
      className={classResult} 
      {...restProps}>
        { Span() }
    </button>
  )
}

Icon.defaultProps = {
  type: 'text',
  size: 'default',
  iconposition: 'right'
}


export default Icon
