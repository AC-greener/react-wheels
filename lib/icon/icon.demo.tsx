import IconExample from './icon.example';
import IconExample2 from './icon.example2';
import React from 'react';
import Demo from '../../src/demo';
import IconExampleSourceCode from './icon.example?raw';
import IconExampleSourceCode2 from './icon.example2?raw';
import './icon.demo.scss'
const IconDemo = () => {
  return (
    <div className='icon-demo'>
      <Demo code={IconExampleSourceCode}>
        <IconExample/>
      </Demo>
      <Demo code={IconExampleSourceCode2}>
        <IconExample2/>
      </Demo>
    </div>
  );
};

export default IconDemo;