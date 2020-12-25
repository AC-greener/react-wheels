import React from 'react'
import './dialog.scss'
import '../base.scss'
import classes from '../helper/classes'
interface DialogProps {
  title?: string
  visible: boolean
  onOk?: Function
  onCancel?: Function
  closable?: boolean
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { visible, onOk, onCancel } = props
  const classResult = classes("fake-modal-root", visible ? 'show' : '')
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
  return (
    <div className={classResult}>
      <div className="fake-modal-mask">

      </div>
      <div className="fake-modal-content">
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

export default Dialog