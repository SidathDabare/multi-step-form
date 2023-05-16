/** @format */
export const SET_STEP_ONE_DETAILS = "SET_STEP_ONE_DETAILS"
export const EDIT_STEP_ONE_DETAILS = "EDIT_STEP_ONE_DETAILS"
export const SET_STEP_TWO_DETAILS = "SET_STEP_TWO_DETAILS"
export const EDIT_STEP_TWO_DETAILS = "EDIT_STEP_TWO_DETAILS"
export const SET_STEP_THREE_DETAILS = "SET_STEP_THREE_DETAILS"
export const EDIT_STEP_THREE_DETAILS = "EDIT_STEP_THREE_DETAILS"
export const SET_STEP_FOUR_DETAILS = "SET_STEP_FOUR_DETAILS"
export const EDIT_STEP_FOUR_DETAILS = "EDIT_STEP_FOUR_DETAILS"

export const setStepOneDetails = (data) => {
  return {
    type: SET_STEP_ONE_DETAILS,
    payload: data,
  }
}
export const editStepOneDetails = (data) => {
  return {
    type: EDIT_STEP_ONE_DETAILS,
    payload: data,
  }
}
export const setStepTwoDetails = (data) => {
  return {
    type: SET_STEP_TWO_DETAILS,
    payload: data,
  }
}
export const editStepTwoDetails = (data) => {
  return {
    type: EDIT_STEP_TWO_DETAILS,
    payload: data,
  }
}
export const setStepThreeDetails = (data) => {
  return {
    type: SET_STEP_THREE_DETAILS,
    payload: data,
  }
}
export const editStepThreeDetails = (data) => {
  return {
    type: EDIT_STEP_THREE_DETAILS,
    payload: data,
  }
}
export const setStepFourDetails = (data) => {
  return {
    type: SET_STEP_FOUR_DETAILS,
    payload: data,
  }
}
export const editStepFourDetails = (data) => {
  return {
    type: EDIT_STEP_FOUR_DETAILS,
    payload: data,
  }
}
