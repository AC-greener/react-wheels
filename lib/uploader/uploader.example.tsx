import React from 'react'
import Uploader from './uploader'
const UploaderExample = () => {
  const handleChange = (file) => {
    if(file.status === 'uploading') {
      console.log('uploading')
    }
    if(file.status === 'done') {
      console.log('done')
    } else if(file.status === 'error') {
      console.log('error')
    }
  }
  return (
    <div>
      <Uploader
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        name="img"
        headers={
          {'authorization': 'authorization-text'}
        }
        onChange={ handleChange }
        withCredentials={ true }
      />
    </div>
  )
}

export default UploaderExample