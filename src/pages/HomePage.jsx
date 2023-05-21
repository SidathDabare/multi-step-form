/** @format */

import React, { useState } from "react"
import StepController from "../customComponent/StepController"
import PersonalInfo from "../components/PersonalInfo"
import SelectPlan from "../components/SelectPlan"
import AddOns from "../components/AddOns"
import Summary from "../components/Summary"
import "./HomePage.css"
import { stepsArr } from "../data"
import { Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import Confirm from "../components/Confirm"

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
  isError: false,
  selectedPlanPrice: 0,
  selectedAddOnPrice: 0,
  addOns: [],
}
const HomePage = () => {
  const [data, setData] = useState(initialData)

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const goToFirstStep = () => {
    goTo(0)
  }
  const formValidation = useForm()
  // console.log(formValidation)
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    goTo,
    nextStep,
    prevStep,
  } = StepController([
    <PersonalInfo
      {...data}
      updateFields={updateFields}
      formValidation={formValidation}
    />,
    <SelectPlan {...data} updateFields={updateFields} />,
    <AddOns {...data} updateFields={updateFields} />,
    <Summary {...data} goToFirstStep={goToFirstStep} />,
    <Confirm />,
  ])
  const goToConfirm = () => {
    if (isLastStep) {
      return nextStep
    }
  }

  const onSubmit = (data) => {
    updateFields({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    })
    if (!isLastStep) return nextStep()
    //   alert("Successful Account Creation")
  }

  return (
    <div className='home-page-container'>
      <Form
        onSubmit={formValidation.handleSubmit((data) => onSubmit(data))}
        className='main-form'
        noValidate>
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
        <div className='form-right-container'>
          <div className='form-right-container-content'>
            <div className='form-right-container-top'>{step}</div>

            {currentStepIndex === steps.length - 1 ? (
              ""
            ) : (
              <div
                className={
                  isFirstStep
                    ? "form-right-container-bottom-1st"
                    : "form-right-container-bottom"
                }>
                {!isFirstStep && (
                  <button
                    className='back-btn small-font'
                    type='button'
                    onClick={prevStep}>
                    Go Back
                  </button>
                )}
                <button
                  onClick={goToConfirm()}
                  className={
                    currentStepIndex === steps.length - 2
                      ? "confirm-btn small-font"
                      : "next-btn small-font"
                  }
                  type='submit'>
                  {currentStepIndex === steps.length - 2
                    ? "Confirm"
                    : "Next Step"}
                </button>
              </div>
            )}
          </div>
        </div>
      </Form>
    </div>
  )
}

export default HomePage
