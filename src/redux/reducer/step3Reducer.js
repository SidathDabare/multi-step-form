/** @format */

import { EDIT_STEP_THREE_DETAILS, SET_STEP_THREE_DETAILS } from "../action"

const initialState = {
  stepThree: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
}
export const stepThreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_THREE_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }
    // second case i need for edit the stepOne in step 1
    case EDIT_STEP_THREE_DETAILS:
      return {
        ...state,
        stepOne: action.payload,
      }

    default:
      return state
  }
}
