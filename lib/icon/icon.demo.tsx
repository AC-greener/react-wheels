import IconExample from './icon.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

console.log('test 111')
const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
        <IconExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;