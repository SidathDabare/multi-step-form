/** @format */

import React, { useState } from "react"
import StepController from "../customComponent/StepController"
import PersonalInfo from "../components/PersonalInfo"
import SelectPlan from "../components/SelectPlan"
import AddOns from "../components/AddOns"
import Summary from "../components/Summary"
import "./HomePage.css"
import { stepsArr } from "../data"

const initialData = {
  name: "",
  email: "",
  phoneNumber: "",
  plans: {
    name: "",
    priceMonthly: 0,
  },
  setAnually: false,
  setOffer: false,
  addOns: [],
}
const HomePage = () => {
  const [data, setData] = useState(initialData)

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    nextStep,
    prevStep,
  } = StepController([
    <PersonalInfo {...data} updateFields={updateFields} />,
    <SelectPlan {...data} updateFields={updateFields} />,
    <AddOns {...data} updateFields={updateFields} />,
    <Summary {...data} />,
  ])
  console.log(steps)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!isLastStep) return nextStep()
    alert("Successful Account Creation")
  }
  return (
    <div className='home-page-container'>
      <form onSubmit={onSubmit} className='main-form'>
        <div className='form-left-container'>
          {/* {currentStepIndex + 1} */}
          <div className='form-left-container-div'>
            <div className='mt-4'>
              {stepsArr.map((step, index) => (
                <div key={index} className='d-flex step-container'>
                  <div className='col-3 step-container-left'>
                    <div
                      className={
                        index === currentStepIndex ? "active fw-bold" : ""
                      }>
                      {index + 1}
                    </div>
                  </div>
                  <div className='col-9 step-container-right'>
                    <p>{step.name}</p>
                    <p>{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='form-right-container '>
          <div className='form-right-container-content'>
            <div className='form-right-container-top'>{step}</div>
            <div
              className={
                isFirstStep
                  ? "form-right-container-bottom-1st"
                  : "form-right-container-bottom"
              }>
              {!isFirstStep && (
                <button className='back-btn' type='button' onClick={prevStep}>
                  Go Back
                </button>
              )}
              <button className='next-btn' type='submit'>
                {isLastStep ? "Finish" : "Next Step"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HomePage
