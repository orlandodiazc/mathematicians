import { type Operator } from "@/types/calculator"

const operate = (
  stringOne: string | null,
  operator: Operator,
  stringTwo: string | null
) => {
  console.log(stringOne, stringTwo, operator)
  const numberOne = Number(stringOne)
  const numberTwo = Number(stringTwo)
  if (operator === "+") {
    return parseFloat((numberOne + numberTwo).toFixed(3)).toString()
  }
  if (operator === "-") {
    return parseFloat((numberOne - numberTwo).toFixed(3)).toString()
  }
  if (operator === "x") {
    return parseFloat((numberOne * numberTwo).toFixed(3)).toString()
  }
  if (operator === "÷") {
    if (numberTwo === 0 || isNaN(numberTwo)) {
      return "Can't divide by 0."
    } else {
      return parseFloat((numberOne / numberTwo).toFixed(3)).toString()
    }
  }
  // if (operator === "%") {
  //   return (numberOne % numberTwo).toString()
  // }
  throw Error(`Unknown operator '${operator}'`)
}

export default operate
