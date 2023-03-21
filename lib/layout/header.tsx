import React from 'react';
import  {scopedClassMaker} from '../helper/index';
import classes from '../helper/classes'
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('fake-layout')
const Header: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <header className={classes(sc('header'), className)} {...rest}>
      {props.children}
    </header>
  )
}

export default Header