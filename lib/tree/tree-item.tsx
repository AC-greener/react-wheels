import React, { ChangeEventHandler,useState, useRef} from 'react'
import Icon from '../icon/icon'
import { scopedClassMaker } from '../helper'
import classes from '../helper/classes'
import useUpdate from './useUpdate'

interface TreeItemProps {
  item: SourceDataItem
  level: number
  treeProps: TreeProps
}

type operator = 'add' | 'delete'

const scopedClass = scopedClassMaker('fui-tree')

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const {item, level, treeProps} = props
  const [expanded, setExpanded] = useState(true)

  const classesResult = classes(
    scopedClass('level-' + level),
    scopedClass('item'),
  )
  const classesResult2 = classes(
    scopedClass('children'),
    expanded ?  '' : scopedClass('collapsed'),
  )

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (treeProps.multiple) {
      if (e.target.checked) {
        treeProps.onChange([...treeProps.selected, item.value])
      } else {
        treeProps.onChange(treeProps.selected.filter(value => value !== item.value))
      }
    }
  };

  const handleArrowClick = () => {
    if(expanded) {
      console.log('关闭')
      setExpanded(false)
    } else {
      console.log('打开')
      setExpanded(true)
    }
  }

  const treeChildRef = useRef<HTMLDivElement>(null)

  useUpdate(expanded, () => {
    const element = treeChildRef.current
    if (!element) return
    if (expanded) {
      element.style.height = 'auto'
      const { height } = element.getBoundingClientRect()
      element.style.height = '0px'
      element.getBoundingClientRect()
      element.style.height = height + 'px'
      const afterExpand = () => {
        element.style.height = ''
        element.removeEventListener('transitionend', afterExpand)
      }
      element.addEventListener('transitionend', afterExpand)
    } else {
      const { height } = element.getBoundingClientRect()
      element.style.height = height + 'px'
      element.getBoundingClientRect()
      element.style.height = '0px'
    }
  })

  const handleAddOrDeleteButtonClick = (clickedTree: SourceDataItem, operator: operator) => {
      const v = (Math.random() * 10).toFixed(1) + ''
      clickedTree.children?.push({
        text:  v,
        value: v
      })
      const sourceData = [...treeProps.sourceData]
  
      updateTreeValue(sourceData)
      function updateTreeValue(sourceData) {
        const length = sourceData.length
        for(let i = 0; i < length; i++) {
          const index = sourceData.indexOf(clickedTree)
          if(index !== -1) {
            if(operator === 'add') {
              sourceData.splice(index, 1, clickedTree)
            } else {
              sourceData.splice(index, 1)
            }
            return
          } else {
            sourceData[i].children && updateTreeValue(sourceData[i].children)
          }
        }
      }
      treeProps.onSourceDataUpdate(sourceData)
  }


  return <div key={item.value} className={classesResult}>
    <div className={scopedClass('text')}>
      {/* <input type="checkbox" onChange={onChange} checked={treeProps.selected.indexOf(item.value) >= 0 }/> */}
      <div className={classes('arrow', expanded ? 'opened' : '')}> 
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
            <Icon name='add' style={{ color: 'red' }} className='button-add'  onClick={() => handleAddOrDeleteButtonClick(item, 'add')}/>
            <Icon name='delete' style={{ color: '#006BFF' }} className='button-delete'  onClick={() => handleAddOrDeleteButtonClick(item, 'delete')}/>
          </span>
        }
      </div>
    </div>
    <div ref={treeChildRef} className={classesResult2}>
      {item.children?.map(sub =>
        <TreeItem key={sub.value} item={sub} level={level + 1} treeProps={treeProps}/>
      )}
    </div>
  </div>
}

export default TreeItem