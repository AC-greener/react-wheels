import React, {useState} from 'react';
import Tree from './tree';
const TreeExample: React.FC = () => {
  const [array, setArray] = useState<SourceDataItem[]>([{
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
  }])
  const [selectedValue, setSelectedValue] = useState('1')
 
  return (
    <div>Tree
      <h1>展示数据</h1>
      {selectedValue}
      <div style={{width: 200}}>
        <Tree 
          sourceData={array}
          onSourceDataUpdate={(value: SourceDataItem[]) => {
            setArray(value)
          }}
          selected={selectedValue}
          onSelectedUpdate={(data: SourceDataItem) => {
            console.log('selected value', data)
            setSelectedValue(data.value)
          }}
        />
      </div>
    </div>
  );
};
export default TreeExample;