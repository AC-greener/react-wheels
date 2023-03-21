import InputExample from './input.example';
import InputExample2 from './input.example2';
import InputExample3 from './input.example3';
import InputExample4 from './input.example4';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import InputExampleSourceCode from './input.example.tsx?raw';
import InputExampleSourceCode2 from './input.example2.tsx?raw';
import InputExampleSourceCode3 from './input.example3.tsx?raw';
import InputExampleSourceCode4 from './input.example4.tsx?raw';

const InputDemo = () => {
  return (
    <Fragment>
      <Demo code={InputExampleSourceCode}>
        <InputExample/>
      </Demo>
      <Demo code={InputExampleSourceCode2}>
        <InputExample2/>
      </Demo>
      <Demo code={InputExampleSourceCode3}>
        <InputExample3/>
      </Demo>
      <Demo code={InputExampleSourceCode4}>
        <InputExample4/>
      </Demo>
    </Fragment>
  );
};

export default InputDemo;