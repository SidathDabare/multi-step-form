/** @format */

import React from "react"

const FormControler = ({ title, subTitle, children }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <br />
      <small style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {subTitle}
      </small>
      <div className='flex-column d-flex'>{children}</div>
    </>
  )
}

export default FormControler
