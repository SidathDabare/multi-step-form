/** @format */

import React from "react"
import "./Summery.css"
import FormControler from "../customComponent/FormControler"

const Summary = (props) => {
  // function to go to first step

  return (
    <FormControler
      title='Finishing up'
      subTitle='Double-check everything looks OK before conferming.'>
      <div className='finishing-container'>
        <div className='finishing-section1 d-flex justify-content-between align-items-center py-3 px-3'>
          <small>
            <span className='fw-bold font-color-marina-blue'>
              {props.plans.name}
              {props.setAnually ? " (Yearly)" : " (Monthly)"}
            </span>
            <br />
            <span
              onClick={() => props.goToFirstStep()}
              className='font-color-gray '
              style={{ cursor: "pointer", textDecoration: "underline" }}>
              Change
            </span>
          </small>
          <small className='fw-bold font-color-marina-blue'>
            ${props.selectedPlanPrice}
            {props.setAnually ? "/yr" : "/mo"}
          </small>
        </div>
        <div className='finishing-section2 d-flex flex-column py-3 px-3 font-color-gray'>
          {props.addOns.map((addOn) => (
            <div
              key={addOn.name}
              className='d-flex justify-content-between align-items-center py-2'>
              <small>{addOn.name}</small>
              <small className='font-color-marina-blue '>
                {" "}
                {props.setAnually
                  ? `+$${addOn.priceMonthly * 12 - addOn.priceMonthly * 2}/yr`
                  : `+$${addOn.priceMonthly}/mo`}
              </small>
            </div>
          ))}
        </div>

        <div className='finishing-section4 d-flex justify-content-between align-items-center py-3 px-3'>
          <small className='font-color-gray'>
            Total {props.setAnually ? "(per year)" : "(per month)"}
          </small>
          <h5 className='font-color-purplish-blue'>
            ${props.selectedPlanPrice + props.selectedAddOnPrice}
            {props.setAnually ? "/yr" : "/mo"}
          </h5>
        </div>
      </div>
    </FormControler>
  )
}

export default Summary
