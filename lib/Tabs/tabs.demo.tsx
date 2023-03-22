import TabsDemo from './tabs.example'
import React, {Fragment} from 'react';
import Demo from '../../src/demo';
import TabsDemoSourceCode from './tabs.example?raw';
const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={TabsDemoSourceCode}>
        <TabsDemo/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;