/** @format */

import React from "react"
import thankImg from "../assets/images/icon-thank-you.svg"
import "./Confirm.css"

const Confirm = () => {
  return (
    <div className='confirm-container'>
      <img src={thankImg} alt='Thank Image' />
      <h3>Thank you!</h3>
      <small>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever ned support, please feel free to email us at
        support@loremgaming.com.
      </small>
    </div>
  )
}

export default Confirm
