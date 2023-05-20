/** @format */

import React from "react"
import "./FormControler.css"

const FormControler = ({ title, subTitle, children }) => {
  return (
    <div className='form-controller-div'>
      <div className='form-controller-header'>
        <h4 className='mb-0 fw-bold'>{title}</h4>
        <small className='font-color-gray'>{subTitle}</small>
      </div>
      <div className='form-controller-content'>{children}</div>
    </div>
  )
}

export default FormControler
