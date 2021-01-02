import React from 'react';
import  {scopedClassMaker} from '../helper/index';
import classes from '../helper/classes'
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('fake-layout')
const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={classes(sc(), className)} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout