import ToastExample from './toast.example';

import React, {Fragment} from 'react';
import Demo from '../../src/demo';
import ToastExampleSourceCode from './toast.example.tsx?raw';

const CollapseDemo = () => {
  return (
    <Fragment>
      <Demo code={ToastExampleSourceCode}>
        <ToastExample/>
      </Demo>
    </Fragment>
  );
};

export default CollapseDemo;