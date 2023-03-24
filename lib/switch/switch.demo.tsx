import SwitchDemo from './switch.example'
import React, {Fragment} from 'react';
import Demo from '../../src/demo';
import SwitchDemoSourceCode from './switch.example?raw';
const App = () => {
  return (
    <Fragment>
      <Demo code={SwitchDemoSourceCode}>
        <SwitchDemo/>
      </Demo>
    </Fragment>
  );
};

export default App;