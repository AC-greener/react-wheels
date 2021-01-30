import classes from '../helper/classes'
import React, { ReactEventHandler, useRef, useState } from 'react'
import './uploader.scss'

interface UploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  action: string
  headers?: {
    authorization: string,
  }
  method?: string
  onChange?:(object) => void
}

const createFormData = (name: string, file): FormData => {
  const formData = new FormData()
  formData.append(name, file)
  return formData
}

const Uploader: React.FunctionComponent<UploaderProps> = (props) => {
  const { className, name, onClick, method, action, headers, onChange, ...restProps} = props
  const inputElementRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState(null)
  const cname = classes(
    "fake-uploader-root",
    className
  )
  const handleClick = () => {
    (inputElementRef as any).current.click()
  }
  const handleChange: ReactEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // status: uploading done error removed
    const file = (e.target as any).files[0]
    file.status = "uploading"
    setFile(file)
    onChange && onChange(file)
    uploadFile()
      .then(res => {
        setFile({
          ...file,
          status: 'done'
        })
        console.log(res)
      })
      .catch(err => {
        setFile({
          ...file,
          status: 'error'
        })
        console.log(err)
      })
  }

  const uploadFile = () => {
    return fetch(action, {
      method,
      body: createFormData(name, file),
      headers: new Headers(headers)
    })
  }

  return (
    <div className={ cname } {...restProps} onClick={ handleClick } >
      <div>
        <input 
          onChange={ handleChange } 
          ref={ inputElementRef } 
          type="file" 
          style={{display: 'none'}} />
        <div>
          上传
        </div>
      </div>
    </div>
  )
}
Uploader.defaultProps = {
  method: 'post'
}

export default Uploader