/** @format */

import { EDIT_STEP_TWO_DETAILS, SET_STEP_TWO_DETAILS } from "../action"

/** @format */
const initialState = {
  stepTwo: {
    arcade: false,
    advanced: false,
    pro: false,
    monthly: false,
  },
}
export const stepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_TWO_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }
    // second case i need for edit the stepOne in step 1
    case EDIT_STEP_TWO_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }

    default:
      return state
  }
}
