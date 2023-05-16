/** @format */

import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { editStepOneDetails, setStepOneDetails } from "../../redux/action"

const Home = () => {
  const stepOne = useSelector((state) => state.stepOne.stepOne)
  console.log(stepOne)
  const [name, setName] = useState(stepOne.name)
  const [email, setEmail] = useState(stepOne.email)
  const [mobile, setMobile] = useState("")

  const dispatch = useDispatch()

  const user = { name, email }

  const addDetails = (e) => {
    e.preventDefault()
    dispatch(setStepOneDetails(user))
  }
  const editDetails = (e) => {
    e.preventDefault()
    dispatch(editStepOneDetails(user))
  }
  useEffect(() => {
    // setUsers([...userDetail])
  }, [])

  return (
    <div className='col-6 mx-auto  bg-secondary'>
      <Form className='vh-50'>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='text'
            placeholder={name ? name : "Enter Name"}
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder={email ? email : "Enter email"}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={addDetails}>
          Submit
        </Button>
        <Button variant='primary' type='submit' onClick={editDetails}>
          Edit
        </Button>
      </Form>
    </div>
  )
}

export default Home
