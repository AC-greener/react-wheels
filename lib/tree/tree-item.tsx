import React, {ChangeEventHandler, useState, useRef} from 'react';
import { scopedClassMaker } from '../helper'
import classes from '../helper/classes'
import useUpdate from './useUpdate'
interface Props {
  item: SourceDataItem
  level: number
  treeProps: TreeProps
}

const scopedClass = scopedClassMaker('fui-tree');

const TreeItem: React.FC<Props> = (props) => {
  const {item, level, treeProps} = props;
  const [expanded, setExpanded] = useState(true);

  const classesResult = classes(
    scopedClass('level-' + level),
    scopedClass('item'),
  )
  const classesResult2 = classes(
    scopedClass('children'),
    expanded ?  '' : scopedClass('collapsed'),
  )
  const checked = treeProps.multiple ?
    treeProps.selected.indexOf(item.value) >= 0 :
    treeProps.selected === item.value;
  const onChange: ChangeEventHandler<{ checked: boolean }> = (e) => {
    if (treeProps.multiple) {
      if (e.target.checked) {
        treeProps.onChange([...treeProps.selected, item.value]);
      } else {
        treeProps.onChange(treeProps.selected.filter(value => value !== item.value));
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value);
      } else {
        treeProps.onChange('');
      }
    }
  }

  const expand = () => {
    setExpanded(true)
  };

  const collapse = () => {
    setExpanded(false)
  }
  const divRef = useRef<HTMLDivElement>(null)
  
  useUpdate(expanded, () => {
    if (!divRef.current) return
    if (expanded) {
      divRef.current.style.height = 'auto'
      const {height} = divRef.current.getBoundingClientRect()
      divRef.current.style.position = ''
      divRef.current.style.opacity = ''
      divRef.current.style.height = '0px';
      divRef.current.getBoundingClientRect()
      divRef.current.style.height = height + 'px'
    } else {
      const {height} = divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + 'px'
      divRef.current.getBoundingClientRect()
      divRef.current.style.height = '0px'
    }
  })

  return <div key={item.value} className={classesResult}>
    <div className={scopedClass('text')}>
      <input type="checkbox" onChange={onChange} checked={checked}/>
      {item.text}
      {item.children &&
      <span >
          {expanded ?
            <span onClick={collapse}>-</span> :
            <span onClick={expand}>+</span>
          }
        </span>
      }
    </div>
    <div ref={divRef} className={classesResult2}>
      {item.children?.map(sub =>
        <TreeItem key={sub.value} item={sub} level={level + 1} treeProps={treeProps}/>
      )}
    </div>
  </div>
}

export default TreeItem