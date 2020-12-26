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
  const { visible, onOk, onCancel, maskClosable, width, okText, cancelText, title, ...restProps } = props
  const classResult = classes("fake-modal", visible ? 'show' : '')

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
        <div className="fake-modal-content fake-radius" style={ style }>
          <header className="fake-modal-header">
            <h2 className="fake-modal-title">
            { title }
            </h2>
          </header>
          <main className="fake-modal-body">
            <p>
              {props.children}
            </p>
          </main>
          <footer className="fake-modal-footer">
            <button onClick={ handleOk }>{ okText }</button>
            <button onClick={ handleCancel }>{ cancelText }</button>
          </footer>
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