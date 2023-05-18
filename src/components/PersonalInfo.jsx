/** @format */

import React from "react"
import FormControler from "../customComponent/FormControler"
import Form from "react-bootstrap/Form"

const PersonalInfo = (props) => {
  console.log(props)
  return (
    <FormControler
      title='Personal Info'
      subTitle='Please provide your name, email address,and phone number'>
      <div className='col-12 '>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            value={props.name ? props.name : ""}
            autoFocus
            onChange={(e) => props.updateFields({ name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={props.email ? props.email : ""}
            onChange={(e) => props.updateFields({ email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your phone number'
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
