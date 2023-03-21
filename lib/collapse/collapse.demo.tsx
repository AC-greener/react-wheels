import CollapseExample from './collapse.example';
import CollapseExample2 from './collapse.example2';
import CollapseExample3 from './collapse.example3';

import React, {Fragment} from 'react';
import Demo from '../../src/demo';
import CollapseExampleSourceCode from './collapse.example.tsx?raw';
import CollapseExampleSourceCode2 from './collapse.example2.tsx?raw';
import CollapseExampleSourceCode3 from './collapse.example3.tsx?raw';

const CollapseDemo = () => {
  return (
    <Fragment>
      <Demo code={CollapseExampleSourceCode}>
        <CollapseExample/>
      </Demo>
      <Demo code={CollapseExampleSourceCode2}>
        <CollapseExample2/>
      </Demo>
      <Demo code={CollapseExampleSourceCode3}>
        <CollapseExample3/>
      </Demo>
    </Fragment>
  );
};

export default CollapseDemo;