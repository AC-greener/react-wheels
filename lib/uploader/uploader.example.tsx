import React from 'react'
import Uploader from './uploader'
const UploaderExample = () => {
  const handleChange = (file) => {
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
      />
    </div>
  )
}

export default UploaderExample