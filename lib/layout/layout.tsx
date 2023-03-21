import React, { ReactElement } from 'react';
import  {scopedClassMaker} from '../helper/index';
import classes from '../helper/classes'
import Aside from './aside'
import './layout.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('fake-layout')
const Layout: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  let hasAside = false
  const children = props.children as Array<ReactElement>;
  React.Children.map(children, (child) => {
    if(child.type === Aside) {
      hasAside = true
    }
  })
  // const hasAside = 'length' in children &&
  //   children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div className={classes(sc(), className, hasAside? 'hasAside': '')} {...rest}>
      {props.children}
    </div>
  )
}

export  {
  Layout
}
export { default as Header } from './header'
export { default as Aside } from './aside'
export { default as Content } from './content'
export { default as Footer } from './footer'