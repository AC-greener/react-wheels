import React, { useReducer } from 'react'
// import { scopedClassMaker } from '../helper/index'
// import classes from '../helper/classes'
import './collapse.scss'

interface collapseProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultActiveKey: Array<string>
  accordion?: boolean
}

const Collapse: React.FunctionComponent<collapseProps> = (props: collapseProps) => {
  const { defaultActiveKey, onClick, accordion, ...restProps } = props
  const initialState = { defaultActiveKey: JSON.parse(JSON.stringify(defaultActiveKey)) };

  function reducer(state, action) {
    switch (action.type) {
      case 'COLLAPSE_ACTION':
        const defaultActiveKey: any = JSON.parse(JSON.stringify(state.defaultActiveKey))
        if(accordion) {
          if(defaultActiveKey.length) {
            defaultActiveKey.splice(0, defaultActiveKey.length)
          }
          defaultActiveKey.push(action.payload)
        } else {
          if(defaultActiveKey.includes(action.payload)) {
            defaultActiveKey.splice(defaultActiveKey.indexOf(action.payload), 1)
          } else {
            defaultActiveKey.push(action.payload)
          }
        }
        // console.log('接收COLLAPSE_ACTION')
        onClick && onClick(defaultActiveKey)
        return { defaultActiveKey }
      default:
        throw new Error('error action type')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        defaultActiveKey: state.defaultActiveKey, 
        headerAction: (type, payload) => dispatch({type, payload}) 
      })
    }
    return child
  })


  return (
    <div className="fake-collapse" { ...restProps }>
      { childrenWithProps }
    </div>
  )
}
Collapse.defaultProps = {
  accordion: false
}

export default Collapse