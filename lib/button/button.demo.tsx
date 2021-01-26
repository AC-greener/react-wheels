import ButtonExample from './button.example';
import ButtonExample2 from './button.example2';
import ButtonExample3 from './button.example3';
import ButtonExample4 from './button.example4';
import ButtonExample5 from './button.example5';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.example.tsx').default}>
        <ButtonExample/>
      </Demo>
      <Demo code={require('!!raw-loader!./button.example2.tsx').default}>
        <ButtonExample2/>
      </Demo>
      <Demo code={require('!!raw-loader!./button.example3.tsx').default}>
        <ButtonExample3/>
      </Demo>
      <Demo code={require('!!raw-loader!./button.example4.tsx').default}>
        <ButtonExample4/>
      </Demo>
      <Demo code={require('!!raw-loader!./button.example5.tsx').default}>
        <ButtonExample5/>
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;