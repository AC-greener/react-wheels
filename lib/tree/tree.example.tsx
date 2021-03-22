import React, {useState} from 'react';
import Tree from './tree';
const TreeExample: React.FC = (props) => {
  const [array, setArray] = useState([{
    text: '1',
    value: '1',
    children: [
      {
        text: '1.1', value: '1.1',
        children: [
          {text: '1.1.1', value: '1.1.1' , 
            children: [
              {
                text: '1.1.1.1', value: '1.1.1.1'
              },
              {
                text: '1.1.1.2', value: '1.1.1.2'
              },
            ]}
          ,
          {text: '1.1.2', value: '1.1.2'},
        ]
      },
      {text: '1.2', value: '1.2'},
    ]
  }, {
    text: '2',
    value: '2',
    children: [
      {text: '2.1', value: '2.1'},
      {text: '2.2', value: '2.2'},
    ]
  }]);
  const [selectedValue, setSelectedValue] = useState(['1', '2']);
  const handleAdd = (value) => {
    setArray(value)
  }
  return (
    <div>Tree
      <h1>展示数据</h1>
      {selectedValue}
      <div style={{width: 200}}>
        <Tree 
          sourceData={array}
          onSourceDataUpdate={handleAdd}
          selected={selectedValue}
          multiple={true}
          onChange={(value: string[]) => {
            console.log('change selected')
            // setSelectedValue(value)
          }}
        />
      </div>
    </div>
  );
};
export default TreeExample;