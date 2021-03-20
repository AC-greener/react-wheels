import React from 'react';
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper'
import './style.scss'

interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[]
}

interface Props {
  sourceData: SourceDataItem[]
}

const scopedClass = scopedClassMaker('fui-tree');

const renderItem = (item: SourceDataItem, level = 1) => {
  const classesResult = classes(
    scopedClass('level-' + level),
    scopedClass('item'),
  );
  return <div key={item.value} className={classesResult}>
    {item.text}
    {item.children?.map(sub => {
      return renderItem(sub, level + 1);
    })}
  </div>;
};

const Tree: React.FC<Props> = (props) => {
  return (
    <div>
      {props.sourceData?.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;