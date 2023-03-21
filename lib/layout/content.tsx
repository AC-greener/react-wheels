import React from 'react';
import  {scopedClassMaker} from '../helper/index';
import classes from '../helper/classes'
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('fake-layout')
const Content: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <main className={classes(sc('content'), className)} {...rest}>
      {props.children}
    </main>
  )
}

export default Content