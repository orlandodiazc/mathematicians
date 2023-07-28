import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Combobox } from "@/components/combo-box"

import systems from "../../systems.json"

type Systems = typeof systems
type Dimensions = Systems["dimensions"]
export type UnitList = Dimensions[keyof Dimensions]["units"]

interface Conversion {
  from: string | null
  to: string | null
}

export default function UnitConverter() {
  const [conversion, setConversion] = useState<Conversion>({
    from: null,
    to: null,
  })
  return (
    <section className="container grid min-h-screen items-center">
      <div className="space-y-3">
        <h1 className="text-center text-3xl">Physical Unit Converter</h1>
        <div className="grid grid-flow-col items-center justify-center gap-4">
          {Object.values(systems.dimensions).map(({ name, units }) => {
            const upperName = name.charAt(0).toUpperCase() + name.slice(1)
            return (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">{upperName}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{upperName} Converter</DialogTitle>
                    <DialogDescription>
                      Select the units in the from and to dropdown selectors.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <h2 className="text-sm text-muted-foreground">
                        Choose the initial unit.
                      </h2>
                      <Combobox
                        units={units}
                        handleUnitChange={(newUnit: string) =>
                          setConversion({ ...conversion, from: newUnit })
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-sm text-muted-foreground">
                        Choose the desired unit.
                      </h2>
                      <Combobox
                        units={units}
                        handleUnitChange={(newUnit: string) =>
                          setConversion({ ...conversion, to: newUnit })
                        }
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
