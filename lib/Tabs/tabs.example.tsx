import React, { useState } from 'react';
import Tabs from './tabs';

const App = () => {
  const [activeKey, setActiveKey] = useState('tab1');

  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for tab 1</div>,
      key: 'tab1'
    },
    {
      label: 'Tab 2',
      content: <div>Content for tab 2</div>,
      key: 'tab2'
    },
    {
      label: 'Tab 3',
      content: <div>Content for tab 3</div>,
      key: 'tab3'
    }
  ];

  return (
    <div>
      <Tabs tabs={tabs} activeKey={activeKey} onChange={(key) => setActiveKey(key)} />
    </div>
  );
}

export default App;
