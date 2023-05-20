/** @format */

import FormControler from "../customComponent/FormControler"
import { plansArr } from "../data"
import Form from "react-bootstrap/Form"
import "./SelectPlan.css"
import { useEffect, useState } from "react"

const SelectPlan = (props) => {
  //function to default the plan to the first plan in the array
  const [updatePrice, setUpdatePrice] = useState(0)
  const defaultPlan = () => {
    if (props.plans.name === "") {
      props.updateFields({ plans: plansArr[0] })
      props.updateFields({ selectedPlanPrice: plansArr[0].priceMonthly })
    } else {
      return
    }
  }

  // const calculatePrice = (plan) => {
  //   if (props.setAnually) {
  //     if (props.setOffer) {
  //       return `$${plan.priceMonthly * 12 - plan.priceMonthly * 2} /yr`
  //     } else {
  //       return `$${plan.priceMonthly * 12} /yr`
  //     }
  //   } else {
  //     return `$${plan.priceMonthly} /mo`
  //   }
  // }
  const setSelectedPlanPrice = (plan) => {
    if (props.setAnually) {
      if (props.setOffer) {
        props.updateFields({
          selectedPlanPrice: plan.priceMonthly * 12 - plan.priceMonthly * 2,
        })
      } else {
        props.updateFields({
          selectedPlanPrice: plan.priceMonthly * 12,
        })
      }
    } else {
      props.updateFields({
        selectedPlanPrice: plan.priceMonthly,
      })
    }

    // if (props.setAnually) {
    //   return plan.priceMonthly * 12 - plan.priceMonthly * 2
    // } else {
    //   return plan.priceMonthly
    // }
  }

  useEffect(() => {
    defaultPlan()
    // setSelectedPlanPrice(props.plans)
    setSelectedPlanPrice(props.plans)
    console.log(props)
  }, [props.setAnually, props.plans, props.setOffer, props.selectedPlanPrice])
  return (
    <FormControler
      title='Select your plan'
      subTitle='You have the option of monthly or yearly billing'>
      <div className='select-plan-top'>
        {plansArr.map((plan) => (
          <div
            key={plan.name}
            className={
              props.plans.id === plan.id
                ? "select-item-active select-item"
                : "select-item"
            }
            onClick={(e) => {
              props.updateFields({ plans: plan })
              props.updateFields({
                selectedPlanPrice: plan.priceMonthly,
              })
            }}>
            <div className='select-item-img-div'>
              <img src={plan.image} alt='' />
            </div>
            <div className='select-item-content'>
              <small className='normal-font fw-bold'>{plan.name}</small>
              <small>
                {props.setAnually
                  ? props.setOffer
                    ? `$${plan.priceMonthly * 12 - plan.priceMonthly * 2} /yr`
                    : 0
                  : `$${plan.priceMonthly} /mo`}
              </small>
              <small>{props.setOffer ? "2 months free" : ""}</small>
            </div>
          </div>
        ))}
      </div>
      <div className='select-plan-bottom'>
        <small
          className={
            !props.setAnually ? "font-color-marina-blue" : "font-color-gray"
          }>
          Monthly
        </small>
        <Form.Check
          className='switch-btn'
          type='switch'
          id='custom-switch'
          checked={props.setAnually}
          onChange={(e) => {
            props.updateFields({ setAnually: !props.setAnually })
            props.updateFields({ setOffer: !props.setOffer })
            setSelectedPlanPrice(props.plans)
          }}
        />

        <small
          className={
            props.setAnually ? "font-color-marina-blue" : "font-color-gray"
          }>
          Anually
        </small>
      </div>
    </FormControler>
  )
}

export default SelectPlan
