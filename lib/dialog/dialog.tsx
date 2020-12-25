import React, { useRef } from 'react'
import './dialog.scss'
import '../base.scss'
import classes from '../helper/classes'
interface DialogProps {
  title?: string
  visible: boolean
  onOk: Function
  onCancel: Function
  closable?: boolean
  maskClosable?: boolean
  width?: number
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const modalRef = useRef(null)
  const { visible, onOk, onCancel, maskClosable, width, ...restProps } = props
  console.log(visible)
  const classResult = classes("fake-modal-root", visible ? 'show' : '')

  const style = {
    width: width ? width : 520
  }
  
  const handleOk = (e) => {
    if(typeof onOk !== "function") {
      throw new Error('请传入正确的参数类型！')
    }
    onOk(e)
  }

  const handleCancel = (e) => {
    if(typeof onOk !== "function") {
      throw new Error('请传入正确的参数类型！')
    }
    onCancel(e)
  }

  const handleMaskClick = (e) => {
    if(maskClosable) {
      // modalRef.current.classList.remove('show')
    }
  }

  return (
    <div ref={modalRef} className={classResult} {...restProps}>
      <div className="fake-modal-mask" onClick={ handleMaskClick }>

      </div>
      <div className="fake-modal-content" style={ style }>
        <div className="fake-modal-header">
          <div className="fake-modal-title">
            title
          </div>
        </div>
        <div className="fake-modal-body">
          body
        </div>
        <div className="fake-modal-footer">
          <button onClick={ handleOk }>确定</button>
          <button onClick={ handleCancel }>取消</button>
        </div>
      </div>
    </div>

  )
}

Dialog.defaultProps = {
  maskClosable: true
}


export default Dialog