import { useState } from "react"
import { UnitList } from "@/pages/unit-converter"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Icons } from "./icons"

export function Combobox({
  units,
  handleUnitChange,
}: {
  units: UnitList
  handleUnitChange: (newUnit: string) => void
}) {
  const defaultUnit = Object.values(units.metric)[0]
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(
    defaultUnit.name + ` (${defaultUnit.symbol})`
  )
  console.log(units.metric)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value || "hey"}
          <Icons.chevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command className="max-h-[240px]">
          <CommandInput placeholder="Search unit..." className="h-9" />
          <CommandEmpty>No unit found.</CommandEmpty>
          <div className="overflow-y-auto">
            {Object.entries(units).map(([groupName, unitList]) => (
              <CommandGroup heading={groupName} className="">
                {Object.values(unitList).map((unit) => (
                  <CommandItem
                    key={unit.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue)
                      setOpen(false)
                    }}
                  >
                    {unit.name} ({unit.symbol})
                    <Icons.check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === unit.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
