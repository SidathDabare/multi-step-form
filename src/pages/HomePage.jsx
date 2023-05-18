/** @format */

import React, { useState } from "react"
import StepController from "../customComponent/StepController"
import PersonalInfo from "../components/PersonalInfo"
import SelectPlan from "../components/SelectPlan"
import AddOns from "../components/AddOns"
import Summary from "../components/Summary"

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

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return nextStep()
    alert("Successful Account Creation")
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}>
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}>
          {!isFirstStep && (
            <button type='button' onClick={prevStep}>
              Back
            </button>
          )}
          <button type='submit'>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default HomePage
