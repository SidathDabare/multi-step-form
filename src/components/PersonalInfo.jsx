/** @format */

import React from "react"
import FormControler from "../customComponent/FormControler"
import Form from "react-bootstrap/Form"
import "./PersonalInfo.css"

const PersonalInfo = (props) => {
  console.log(props)
  return (
    <FormControler
      title='Personal Info'
      subTitle='Please provide your name, email address,and phone number'>
      <div className='col-12 '>
        <Form.Group className='mb-3'>
          <small className='small-font font-color-marina-blue'>Name</small>
          <Form.Control
            className='small-font py-2 mt-1'
            type='text'
            placeholder='e.g. Stepahen King'
            value={props.name ? props.name : ""}
            autoFocus
            onChange={(e) => props.updateFields({ name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <small className='small-font font-color-marina-blue'>Email</small>
          <Form.Control
            className='small-font py-2 mt-1'
            type='email'
            placeholder='e.g. stephenking@lorem.com'
            value={props.email ? props.email : ""}
            onChange={(e) => props.updateFields({ email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <small className='small-font font-color-marina-blue'>
            Phone Number
          </small>
          <Form.Control
            className='small-font py-2 mt-1'
            type='text'
            placeholder='e.g. +1 202-555-0132'
            value={props.phoneNumber ? props.phoneNumber : ""}
            onChange={(e) =>
              props.updateFields({ phoneNumber: e.target.value })
            }
          />
        </Form.Group>
      </div>
    </FormControler>
  )
}

export default PersonalInfo
