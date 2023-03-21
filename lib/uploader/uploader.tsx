import classes from '../helper/classes'
import React, { ReactEventHandler, useRef } from 'react'
import './uploader.scss'

interface UploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  action: string
  headers?: {}
  method?: string
  onChange?:(object) => void
  withCredentials?: boolean
}
 
const createFormData = (name: string, file): FormData => {
  const formData = new FormData()
  formData.append(name, file)
  return formData
}

const Uploader: React.FC<UploaderProps> = (props) => {
  const { 
    className, 
    name,
    onClick,
    method,
    action, 
    headers, 
    onChange,
    withCredentials, 
    ...restProps
  } = props
  const inputElementRef = useRef<HTMLInputElement>(null)
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
    onChange && onChange(file)
    uploadFile(file)
      .then(res => {
        file.status = 'done'
        onChange && onChange(file)
      })
      .catch(err => {
        file.status = 'error'
        onChange && onChange(file)
      })
  }

  const uploadFile = (file) => {
    const options: any = {
      method,
      body: createFormData(name, file),
      headers: new Headers(headers),
    }
    if(withCredentials) {
      options.credentials = 'include'
    }
    return fetch(action, options)
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
  method: 'post',
  withCredentials: false,
  headers: {}
}

export default Uploader