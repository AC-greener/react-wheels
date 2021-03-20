import React, {ChangeEventHandler, useState, useRef} from 'react';
import Icon from '../icon/icon'
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



  const handleArrowClick = () => {
    if(expanded) {
      console.log('关闭')
      setExpanded(false)
    } else {
      console.log('打开')
      setExpanded(true)
    }
  }

  const divRef = useRef<HTMLDivElement>(null)

  useUpdate(expanded, () => {
    if (!divRef.current) return
    if (expanded) {
      // divRef.current.style.height = 'auto'
      // const {height} = divRef.current.getBoundingClientRect()
      // divRef.current.style.position = ''
      // divRef.current.style.opacity = ''
      // divRef.current.style.height = '0px';
      // divRef.current.getBoundingClientRect()
      // divRef.current.style.height = height + 'px'
    } else {
      // const {height} = divRef.current.getBoundingClientRect();
      // divRef.current.style.height = height + 'px'
      // divRef.current.getBoundingClientRect()
      // divRef.current.style.height = '0px'
    }
  })

  const handleAddButtonClick = (clickedTree: SourceDataItem) => {
    const v = (Math.random() * 10).toFixed(1) + ''
    clickedTree.children?.push({
      text:  v,
      value: v
    })
    const sourceData = [...treeProps.sourceData]

    insertValue2Tree(sourceData)
    function insertValue2Tree(sourceData) {
      const length = sourceData.length
      for(let i = 0 ; i < length; i++) {
        if(sourceData.indexOf(clickedTree) !== -1) {
          sourceData.splice(sourceData.indexOf(clickedTree), 1, clickedTree)
          return
        } else {
          sourceData[i].children && insertValue2Tree(sourceData[i].children)
        }
      }
    }
    console.log('sourceData', sourceData)

    treeProps.onAdd(sourceData)
  }
  function handleDeleteButtonClick(clickedTree: SourceDataItem) {
    const sourceData = [...treeProps.sourceData]
    deleteValue2Tree(sourceData)
    function deleteValue2Tree(sourceData) {
      const length = sourceData.length
      for(let i = 0 ; i < length; i++) {
        if(sourceData.indexOf(clickedTree) !== -1) {
          sourceData.splice(sourceData.indexOf(clickedTree), 1)
          return
        } else {
          sourceData[i].children && deleteValue2Tree(sourceData[i].children)
        }
      }
    }
    treeProps.onAdd(sourceData)
    console.log('sourceData', sourceData)
  }

  return <div key={item.value} className={classesResult}>
    <div className={scopedClass('text')}>
      <div className={classes('arrow', expanded ? 'opened' : '')}> 
        {/* <input type="checkbox" onChange={onChange} checked={checked}/> */}
        {
          item.children ?  
            <Icon name='arrow'  onClick={handleArrowClick}/> : 
            <div style={{width:'14px'}}></div>
        }
      </div>
      <div className='content' onSelect={(e) => e.preventDefault()}>
        <span >{item.text}</span>
        {item.children &&
          <span className='btn'>
            <Icon name='add' style={{ color: 'red' }} className='button-add'  onClick={() => handleAddButtonClick(item)}/>
            <Icon name='delete' style={{ color: '#006BFF' }} className='button-add'  onClick={() => handleDeleteButtonClick(item)}/>
          </span>
        }
        {/* <Icon name='delete' style={{ color: '#006BFF' }} className='button-add'  onClick={() => handleDeleteButtonClick(item)}/> */}
      </div>
    </div>
    <div ref={divRef} className={classesResult2}>
      {item.children?.map((sub, index) =>
        <TreeItem key={sub.value} item={sub} level={level + 1} treeProps={treeProps}/>
      )}
    </div>
  </div>
}

export default TreeItem