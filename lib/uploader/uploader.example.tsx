import React from 'react'
import Uploader from './uploader'
const UploaderExample = () => {
  const handleChange = (file) => {
    console.log(file)
  }
  return (
    <div>
      <Uploader
        name="img"
        onChange={ handleChange }
      />
    </div>
  )
}

export default UploaderExample