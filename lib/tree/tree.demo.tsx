import TreeExample from './tree.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./tree.example.tsx').default}>
        <TreeExample/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;