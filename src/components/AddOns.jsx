/** @format */

import React, { useState } from "react"
import FormControler from "../customComponent/FormControler"
import { addOnsArr } from "../data"
import Form from "react-bootstrap/Form"

const AddOns = (props) => {
  console.log(props.setAnually)

  const handleItemChange = (e, item) => {
    if (e.target.checked) {
      props.updateFields({ addOns: [...props.addOns, item.name] })
    } else {
      props.updateFields({
        addOns: props.addOns.filter((addOn) => addOn !== item.name),
      })
    }
  }

  return (
    <FormControler
      title='Pick add-ons'
      subTitle='Add-ons help enchance your gaming experience'>
      <div className='col-12'>
        {addOnsArr.map((addOn, i) => (
          <div
            key={addOn.name}
            className={
              props.addOns.includes(addOn.name)
                ? "bg-warning col-12 d-flex border "
                : "col-12 d-flex border"
            }
            style={{ padding: "1rem", cursor: "pointer", minWidth: "150px" }}>
            <div className='col-3'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
                checked={props.addOns.includes(addOn.name)}
                onChange={(e) => handleItemChange(e, addOn)}
              />
            </div>
            <div className='col-9 d-flex justify-content-between'>
              <h4>{addOn.name}</h4>
              <h5>
                {props.setAnually
                  ? addOn.priceMonthly * 12
                  : addOn.priceMonthly}
              </h5>
            </div>
          </div>
        ))}
        <div className='d-flex mt-5'>
          <h6>Monthly</h6>
          <Form.Check
            type='switch'
            id='custom-switch'
            checked={props.setAnually}
            onChange={() =>
              props.updateFields({ setAnually: !props.setAnually })
            }
          />
          <h6>Anually</h6>
        </div>
      </div>
    </FormControler>
  )
}

export default AddOns
