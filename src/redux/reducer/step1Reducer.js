/** @format */

import { EDIT_STEP_ONE_DETAILS, SET_STEP_ONE_DETAILS } from "../action"

/** @format */
const initialState = {
  stepOne: {},
}
export const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_ONE_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }
    // second case i need for edit the stepOne in step 1
    case EDIT_STEP_ONE_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }

    default:
      return state
  }
}
