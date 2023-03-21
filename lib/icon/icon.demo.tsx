import IconExample from './icon.example';
import IconExample2 from './icon.example2';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import IconExampleSourceCode from './icon.example?raw';
import IconExampleSourceCode2 from './icon.example2?raw';
const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={IconExampleSourceCode}>
        <IconExample/>
      </Demo>
      <Demo code={IconExampleSourceCode2}>
        <IconExample2/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;