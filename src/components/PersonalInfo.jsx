/** @format */

import FormControler from "../customComponent/FormControler"
import Form from "react-bootstrap/Form"
import "./PersonalInfo.css"

const PersonalInfo = (props) => {
  return (
    <FormControler
      title='Personal Info'
      subTitle='Please provide your name, email address, and phone number'>
      <div className='col-12 '>
        <Form.Group className='mb-3 form-container'>
          <small className='small-font d-flex justify-content-between semi-bold'>
            <span className='font-color-marina-blue'>Name</span>
            {props.formValidation.formState.errors.name && (
              <span className='text-danger'> This field is required</span>
            )}
          </small>

          <input
            className='personal-info-input'
            type='text'
            placeholder='e.g. Stepahen King'
            // value={props.name ? props.name : ""}
            // onChange={(e) => props.updateFields({ name: e.target.value })}
            {...props.formValidation.register("name", { required: true })}
          />
        </Form.Group>
        <Form.Group className='mb-3 form-container'>
          <small className='small-font d-flex justify-content-between semi-bold'>
            <span className='font-color-marina-blue'>Email</span>
            {props.formValidation.formState.errors.email && (
              <span className='text-danger'> This field is required</span>
            )}
          </small>
          <input
            className='personal-info-input'
            type='email'
            placeholder='e.g. stephenking@lorem.com'
            {...props.formValidation.register("email", { required: true })}
          />
        </Form.Group>
        <Form.Group className='mb-3 form-container'>
          <small className='small-font d-flex justify-content-between semi-bold'>
            <span className='font-color-marina-blue'>Phone Number</span>
            {props.formValidation.formState.errors.phoneNumber && (
              <span className='text-danger'> This field is required</span>
            )}
          </small>
          <input
            className='personal-info-input'
            type='text'
            placeholder='e.g. +1 202-555-0132'
            required
            {...props.formValidation.register("phoneNumber", {
              required: true,
            })}
          />
        </Form.Group>
      </div>
    </FormControler>
  )
}

export default PersonalInfo
