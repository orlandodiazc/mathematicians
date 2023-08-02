import { useRef, useState } from "react"
import { Units } from "@/pages/unit-converter"

import { type Unit } from "@/types/unit-list"

import { Combobox } from "./combo-box"
import { Input } from "./ui/input"

export default function Conversion({ units }: { units: Units }) {
  const unitList: Unit[] = Object.values(units)

  const [inputs, setInput] = useState([
    { value: "1", unit: unitList[0] },
    {
      value: (1 / unitList[1].multiplier).toString(),
      unit: unitList[1],
    },
  ])

  function convertValue() {}
  return (
    <div className="flex flex-col gap-2">
      {inputs.map(({ value, unit }, id) => {
        const inputRef = useRef<HTMLInputElement>(null)
        return (
          <div className="grid grid-cols-2 items-end gap-1" key={id}>
            <Input
              value={value}
              ref={inputRef}
              onClick={() => inputRef.current?.select()}
              onChange={(e) =>
                setInput(
                  inputs.map((input, idx) => {
                    if (idx === id) return { ...input, value: e.target.value }
                    else {
                      const newValue = parseFloat(
                        e.target.value.replace(",", ".")
                      )
                      if (!e.target.value || !newValue)
                        return {
                          ...input,
                          value: "",
                        }
                      return {
                        ...input,
                        value: (
                          (newValue *
                            inputs[idx === 0 ? 1 : 0].unit.multiplier) /
                          input.unit.multiplier
                        ).toString(),
                      }
                    }
                  })
                )
              }
            />
            <Combobox
              unitList={unitList}
              activeUnit={unit.name}
              handleUnitChange={(newUnit) => {
                const isSwap =
                  newUnit.name === inputs[id === 0 ? 1 : 0].unit.name
                if (isSwap) {
                  setInput(
                    inputs.map((_, idx) => {
                      if (idx === id)
                        return {
                          value: inputs[idx === 0 ? 1 : 0].value,
                          unit: newUnit,
                        }
                      return {
                        value: inputs[id].value,
                        unit: inputs[id].unit,
                      }
                    })
                  )
                } else {
                  setInput(
                    inputs.map((input, idx) => {
                      if (idx === id) {
                        console.log(
                          parseFloat(input.value.replace(",", ".")),
                          inputs[id === 0 ? 1 : 0].unit.multiplier,
                          newUnit.multiplier
                        )
                        return {
                          value: (
                            (parseFloat(
                              inputs[id === 0 ? 1 : 0].value.replace(",", ".")
                            ) *
                              inputs[id === 0 ? 1 : 0].unit.multiplier) /
                            newUnit.multiplier
                          ).toString(),
                          unit: newUnit,
                        }
                      }
                      return input
                    })
                  )
                }
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
