import classes from '../helper/classes'
import React, { useRef, useState } from 'react'
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

const createFormData = (name, file) => {
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // status: uploading done error removed
    const file = (e.target as any).files[0]
    file.status = "uploading"
    setFile(file)
    onChange && onChange(file)
    uploadFile()
  }

  const uploadFile = () => {
    console.log(1111)
    fetch(action, {
      method,
      body: createFormData(name, file),
      headers: new Headers(headers)
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error('Error:', error))
  }
  return (
    <div className={ cname } {...restProps} onClick={ handleClick } >
      <div>
        <input 
          onChange={ handleChange } 
          ref={ inputElementRef } 
          type="file" 
          name={ name }
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