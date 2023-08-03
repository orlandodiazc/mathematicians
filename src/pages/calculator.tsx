import { useState } from "react"

import { CalculatorData, Digit, Operator } from "@/types/calculator"
import operate from "@/lib/logic/operate"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Calculator() {
  const [display, setDisplay] = useState<CalculatorData>({
    total: null,
    next: "0",
    operator: null,
  })

  function onDigitClick(digit: Digit) {
    if (
      (display.next === "0" && digit === "0") ||
      (!display.operator && !display.next)
    ) {
      //Check display length and next and total
      return
    }
    const newNext =
      display.next === "0" || !display.next ? digit : display.next + digit

    setDisplay({
      ...display,
      next: newNext,
    })
  }

  function onOperatorClick(newOperator: Operator) {
    if (display.operator && display.next) {
      setDisplay({
        total: operate(display.total, display.operator, display.next),
        operator: newOperator,
        next: null,
      })
    } else {
      setDisplay({
        total: display.next ? display.next : display.total,
        operator: newOperator,
        next: null,
      })
    }
  }
  function onEqualClick() {
    if (!display.next || !display.total || !display.operator) return
    setDisplay({
      total: operate(display.total, display.operator, display.next),
      operator: null,
      next: null,
    })
  }

  function onCommaClick() {
    if (display.next?.includes(".") || (!display.operator && !display.next))
      return

    if (display.next) {
      setDisplay({ ...display, next: display.next + "." })
    } else {
      setDisplay({ ...display, next: "0." })
    }
  }

  function onDeleteClick() {
    if (!display.next || (display.next === "0" && !display.total)) return
    setDisplay({
      ...display,
      next: display.next.slice(0, -1),
    })
  }

  function onResetClick() {
    setDisplay({
      total: null,
      next: "0",
      operator: null,
    })
  }
  const { total, next, operator } = display
  return (
    <div id="calculator" className="mx-auto flex max-w-md flex-col gap-4">
      <h1 className="text-4xl font-bold">calc</h1>
      <div
        data-testid="display"
        className="h-24 rounded-lg bg-secondary px-3 pb-3 pt-5 text-end"
      >
        <div className="text-4xl font-bold">
          {total}
          {operator}
        </div>
        <div
          className={cn(
            "text-lg font-bold",
            next === "0" && !total ? "text-4xl font-bold" : null
          )}
        >
          {next}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <Button className="col-start-3" onClick={onResetClick}>
          AC
        </Button>
        <Button onClick={onDeleteClick}>C</Button>
        <Button onClick={() => onDigitClick("7")}>7</Button>
        <Button onClick={() => onDigitClick("8")}>8</Button>
        <Button onClick={() => onDigitClick("9")}>9</Button>
        <Button onClick={() => onOperatorClick("÷")}>÷</Button>
        <Button onClick={() => onDigitClick("4")}>4</Button>
        <Button onClick={() => onDigitClick("5")}>5</Button>
        <Button onClick={() => onDigitClick("6")}>6</Button>
        <Button onClick={() => onOperatorClick("x")}>x</Button>
        <Button onClick={() => onDigitClick("1")}>1</Button>
        <Button onClick={() => onDigitClick("2")}>2</Button>
        <Button onClick={() => onDigitClick("3")}>3</Button>
        <Button onClick={() => onOperatorClick("-")}>−</Button>
        <Button onClick={() => onDigitClick("0")}>0</Button>
        <Button onClick={onCommaClick}>.</Button>
        <Button onClick={onEqualClick}>=</Button>
        <Button onClick={() => onOperatorClick("+")}>+</Button>
      </div>
    </div>
  )
}
