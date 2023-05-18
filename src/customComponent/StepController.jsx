/** @format */

import { useState } from "react"

const StepController = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function nextStep() {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) {
        return prev
      }
      return prev + 1
    })
  }
  function prevStep() {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) {
        return prev
      }
      return prev - 1
    })
  }

  function goTo(index) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    nextStep,
    prevStep,
  }
}

export default StepController
