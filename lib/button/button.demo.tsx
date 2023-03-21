import ButtonExample from './button.example';
console.log('ButtonExample :>> ', ButtonExample);
import ButtonExample2 from './button.example2';
import ButtonExample3 from './button.example3';
import ButtonExample4 from './button.example4';
import ButtonExample5 from './button.example5';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import buttonExampleSourceCode from './button.example.tsx?raw';
import buttonExampleSourceCode2 from './button.example2.tsx?raw';
import buttonExampleSourceCode3 from './button.example3.tsx?raw';
import buttonExampleSourceCode4 from './button.example4.tsx?raw';
import buttonExampleSourceCode5 from './button.example5.tsx?raw';
console.log('buttonExampleSourceCode :>> ', buttonExampleSourceCode);
const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={buttonExampleSourceCode}>
        <ButtonExample/>
      </Demo>
      <Demo code={buttonExampleSourceCode2}>
        <ButtonExample2/>
      </Demo>
      <Demo code={buttonExampleSourceCode3}>
        <ButtonExample3/>
      </Demo>
      <Demo code={buttonExampleSourceCode4}>
        <ButtonExample4/>
      </Demo>
      <Demo code={buttonExampleSourceCode5}>
        <ButtonExample5/>
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;