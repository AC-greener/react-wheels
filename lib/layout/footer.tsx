import React from 'react';
import  {scopedClassMaker} from '../helper/index';
import classes from '../helper/classes'
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('fake-layout')
const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <footer className={classes(sc('footer'), className)} {...rest}>
      {props.children}
    </footer>
  )
}

export default Footer