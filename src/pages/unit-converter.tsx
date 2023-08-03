import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Conversion from "@/components/conversion"

import systems from "../../systems.json"

type ConversionData = typeof systems
type Dimensions = ConversionData["dimensions"]
export type Units = Dimensions[keyof Dimensions]["units"]

export default function UnitConverter() {
  return (
    <section className="mx-auto flex max-w-md flex-col gap-4">
      <div className="space-y-3">
        <h1 className=" text-4xl font-bold">converter</h1>
        <div className="grid grid-flow-col items-center justify-center gap-4">
          {Object.values(systems.dimensions).map(({ name, units }) => {
            const upperName = name.charAt(0).toUpperCase() + name.slice(1)
            return (
              <Dialog key={name}>
                <DialogTrigger asChild>
                  <Button variant="outline">{upperName}</Button>
                </DialogTrigger>
                <DialogContent
                  className="sm:max-w-[425px]"
                  onInteractOutside={(e) => e.preventDefault()}
                >
                  <DialogHeader>
                    <DialogTitle>{upperName} Converter</DialogTitle>
                    <DialogDescription>
                      Select the units in the dropdown selectors.
                    </DialogDescription>
                  </DialogHeader>
                  <Conversion units={units} />
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
