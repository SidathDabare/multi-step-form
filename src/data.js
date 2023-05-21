/** @format */
import arcade from "./assets/images/icon-arcade.svg"
import pro from "./assets/images/icon-pro.svg"
import advanced from "./assets/images/icon-advanced.svg"
export const stepsArr = [
  { name: "STEP 1", id: 1, title: "YOUR INFO" },
  { name: "STEP 2", id: 2, title: "SELECT PLAN" },
  { name: "STEP 3", id: 3, title: "ADD-ONS" },
  { name: "STEP 4", id: 4, title: "SUMMERY" },
]
export const plansArr = [
  {
    id: 1,
    name: "Arcade",
    priceMonthly: 9,
    image: arcade,
  },
  {
    id: 2,
    name: "Advanced",
    priceMonthly: 12,
    image: advanced,
  },
  {
    id: 3,
    name: "Pro",
    priceMonthly: 15,
    image: pro,
  },
]
export const addOnsArr = [
  {
    id: 1,
    name: "Online service",
    priceMonthly: 1,
    type: "Access to multiplayer games",
  },
  {
    id: 2,
    name: "Large storage",
    priceMonthly: 2,
    type: "Extra 1TB of cloud save",
  },
  {
    id: 3,
    name: "Customizable Profile",
    priceMonthly: 2,
    type: "Customize theme on your profile",
  },
]
