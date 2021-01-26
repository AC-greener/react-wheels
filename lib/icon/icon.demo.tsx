import IconExample from './icon.example';
import IconExample2 from './icon.example2';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
        <IconExample/>
      </Demo>
      <Demo code={require('!!raw-loader!./icon.example2.tsx').default}>
        <IconExample2/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;