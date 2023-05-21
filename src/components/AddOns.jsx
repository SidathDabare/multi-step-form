/** @format */

import FormControler from "../customComponent/FormControler"
import { addOnsArr } from "../data"
import Form from "react-bootstrap/Form"
import "./AddOns.css"
import { useEffect } from "react"

const AddOns = (props) => {
  console.log(props)
  // increase the price
  const increasePrice = (price) => {
    if (props.setAnually) {
      props.updateFields({
        selectedAddOnPrice: props.selectedAddOnPrice + price * 12 - price * 2,
      })
    } else {
      props.updateFields({
        selectedAddOnPrice: props.selectedAddOnPrice + price,
      })
    }
  }
  // decrease the price
  const decreasePrice = (price) => {
    if (props.setAnually) {
      if (props.selectedAddOnPrice === 0) {
        props.updateFields({
          selectedAddOnPrice: 0,
        })
      }

      props.updateFields({
        selectedAddOnPrice: props.selectedAddOnPrice - price * 12 + price * 2,
      })
    } else {
      props.updateFields({
        selectedAddOnPrice: props.selectedAddOnPrice - price,
      })
    }
  }

  const handleItemChange = (e, item) => {
    if (e.target.checked) {
      props.updateFields({ addOns: [...props.addOns, item] })
      increasePrice(item.priceMonthly)
    } else {
      props.updateFields({
        addOns: props.addOns.filter((addOn) => addOn !== item),
      })
      decreasePrice(item.priceMonthly)
    }
  }
  // change selected addOns price when setAnually is changed
  const changeSelectedAddOnsPrice = () => {
    if (props.addOns.length > 0) {
      if (props.setAnually) {
        props.updateFields({
          selectedAddOnPrice: props.addOns.reduce(
            (acc, addOn) =>
              acc + addOn.priceMonthly * 12 - addOn.priceMonthly * 2,
            0
          ),
        })
      } else {
        props.updateFields({
          selectedAddOnPrice: props.addOns.reduce(
            (acc, addOn) => acc + addOn.priceMonthly,
            0
          ),
        })
      }
    } else {
      props.updateFields({
        selectedAddOnPrice: 0,
      })
    }
  }

  useEffect(() => {
    changeSelectedAddOnsPrice()
  }, [])
  return (
    <FormControler
      title='Pick add-ons'
      subTitle='Add-ons help enchance your gaming experience.'>
      <div className='addOns-container'>
        {addOnsArr.map((addOn, i) => (
          <div
            key={addOn.name}
            className={
              props.addOns.includes(addOn)
                ? "col-12 d-flex addOns-item addOns-item-active"
                : "col-12 d-flex addOns-item"
            }>
            <div className='col-1 d-flex align-items-center addOns-item-section1'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
                checked={props.addOns.includes(addOn)}
                onChange={(e) => handleItemChange(e, addOn)}
              />
            </div>
            <div className='col-11 d-flex justify-content-between addOns-item-section2'>
              <div className='d-flex flex-column px-2'>
                <small>{addOn.name}</small>
                <small>{addOn.type}</small>
              </div>
              <small className='d-flex align-items-center'>
                {props.setAnually
                  ? `+$${addOn.priceMonthly * 12 - addOn.priceMonthly * 2} /yr`
                  : `+$${addOn.priceMonthly} /mo`}
              </small>
            </div>
          </div>
        ))}
      </div>
    </FormControler>
  )
}

export default AddOns
