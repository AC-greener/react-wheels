import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom';
import './dialog.scss'
import '../base.scss'
import { Icon } from '../index'
import classes from '../helper/classes'
import { scopedClassMaker, isFunction } from '../helper/index'

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
  title?: string
  closable?: boolean
  maskClosable?: boolean
  width?: number
  cancelText?: string
  okText?: string
  onOk: React.MouseEventHandler
  onCancel: React.MouseEventHandler
  afterClose?: () => void
}

const scopedClass = scopedClassMaker('fake-modal')

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { visible, onOk, onCancel, maskClosable, width, okText, cancelText, className, title, closable, afterClose, ...restProps } = props
  const classResult = classes(scopedClass(), className)

  const style = {
    width: width ? width : 520
  }

  const handleOk: React.MouseEventHandler = (e) => {
    if(!isFunction(onOk)) {
      throw new Error('请传入正确的参数类型！')
    }
    onOk(e)
    afterClose && afterClose()
  }

  const handleCancel: React.MouseEventHandler = (e) => {
    if(!isFunction(onOk)) {
      throw new Error('请传入正确的参数类型！')
    }
    onCancel(e)
    afterClose && afterClose()
  }

  const handleMaskClick: React.MouseEventHandler = (e) => {
    if(maskClosable) {
      onCancel(e)
      afterClose && afterClose()
    }
  }

  const App = visible &&
    <div className={classResult} {...restProps}>
      <div className={ scopedClass("mask") } onClick={ handleMaskClick }>
      </div>
      <div className={ scopedClass("container") }>
        <div className={`${ scopedClass("content") } fake-radius`} style={ style }>
          <header className={ scopedClass("header") }>
            {
              props.closable &&
              <span onClick={ handleCancel} className={ scopedClass("close") }>
                <Icon name="close" fontSize="small"/>
              </span>
            }
            <h2 className={ scopedClass("title") }>
            { title }
            </h2>
          </header>
          <main className={ scopedClass("body") }>
            <p>
              {props.children}
            </p>
          </main>
          <footer className={ scopedClass("footer")} >
            <button onClick={ handleOk }>{ okText }</button>
            <button onClick={ handleCancel }>{ cancelText }</button>
          </footer>
        </div>
      </div>
    </div>

  return ReactDOM.createPortal(App, document.body)
}

Dialog.defaultProps = {
  maskClosable: true,
  closable: true,
  okText: '确定',
  cancelText: '取消',
}

interface alertProps {
  title?: string
  content: ReactNode
}

const alert = (props: alertProps) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <Dialog title={ props.title } visible={true} onOk={close} onCancel={close}>
      { props.content }
    </Dialog>
  )

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  //返回close方法让用户可以调用
  return close
}

export { alert }

export default Dialog