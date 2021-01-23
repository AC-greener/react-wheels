import DialogExample from './dialog.example';
import DialogExample2 from './dialog.example2';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
        <DialogExample/>
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example2.tsx').default}>
        <DialogExample2/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;