import DialogExample from './dialog.example';
import DialogExample2 from './dialog.example2';
import React, {Fragment} from 'react';
import Demo from '../../src/demo';
import DialogExampleSourceCode from './dialog.example?raw';
import DialogExampleSourceCode2 from './dialog.example2?raw';
const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={DialogExampleSourceCode}>
        <DialogExample/>
      </Demo>
      <Demo code={DialogExampleSourceCode2}>
        <DialogExample2/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;