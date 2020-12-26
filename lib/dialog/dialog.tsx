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
  cancelText?: string
  okText?: string
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const modalRef = useRef(null)
  const { visible, onOk, onCancel, maskClosable, width, okText, cancelText, ...restProps } = props
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
      <div className="fake-modal-container">
        <div className="fake-modal-content" style={ style }>
          <div className="fake-modal-header">
            <h2 className="fake-modal-title">
            Use Google's location service?
            </h2>
          </div>
          <div className="fake-modal-body">
            <p>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </p>
          </div>
          <div className="fake-modal-footer">
            <button onClick={ handleOk }>{ okText }</button>
            <button onClick={ handleCancel }>{ cancelText }</button>
          </div>
        </div>
      </div>
    </div>

  )
}

Dialog.defaultProps = {
  maskClosable: true,
  okText: '确定',
  cancelText: '取消',
}


export default Dialog