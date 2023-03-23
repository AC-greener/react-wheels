import RateExample from './rate.example';
import RateExample2 from './rate.example2';
import RateExample3 from './rate.example3';
import React from 'react';
import Demo from '../../src/demo';
import RateExampleSourceCode from './rate.example?raw';
import RateExampleSourceCode2 from './rate.example2?raw';
import RateExampleSourceCode3 from './rate.example3?raw';
const IconDemo = () => {
  return (
    <div className='icon-demo'>
      <Demo code={RateExampleSourceCode}>
        <RateExample/>
      </Demo>
      <Demo code={RateExampleSourceCode2}>
        <RateExample2/>
      </Demo>
      <Demo code={RateExampleSourceCode3}>
        <RateExample3/>
      </Demo>
    </div>
  );
};

export default IconDemo;