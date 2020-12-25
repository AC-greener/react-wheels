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
  const { visible } = props
  const result = classes("fake-modal-root", visible ? 'show' : '')
  return (
    <div className={result}>
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
          <button>确定</button>
          <button>取消</button>
        </div>
      </div>
    </div>

  )
}

export default Dialog