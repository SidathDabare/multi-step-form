/** @format */

import FormControler from "../customComponent/FormControler"
import { plansArr } from "../data"
import Form from "react-bootstrap/Form"

const SelectPlan = (props) => {
  console.log(props.setOffer)

  return (
    <FormControler
      title='Select your plan'
      subTitle='You have the option of monthly or yearly billing'>
      <div className='col-6 d-flex'>
        {plansArr.map((plan) => (
          <div
            key={plan.name}
            className={props.plans.id === plan.id ? "bg-warning card" : "card"}
            style={{ padding: "1rem", cursor: "pointer", minWidth: "150px" }}
            onClick={(e) => props.updateFields({ plans: plan })}>
            <h4>{plan.name}</h4>
            <h5>
              {props.setAnually
                ? props.setOffer
                  ? plan.priceMonthly * 12 - plan.priceMonthly * 2
                  : 0
                : plan.priceMonthly}
            </h5>
            <small>{props.setOffer ? "2 months free" : ""}</small>
          </div>
        ))}
      </div>
      <div className='d-flex mt-5'>
        <h6>Monthly</h6>
        <Form.Check
          type='switch'
          id='custom-switch'
          checked={props.setAnually}
          onChange={() => {
            props.updateFields({
              setAnually: !props.setAnually,
            })
            props.updateFields({ setOffer: !props.setOffer })
          }}
        />
        <h6>Anually</h6>
      </div>
    </FormControler>
  )
}

export default SelectPlan
