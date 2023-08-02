import { useState } from "react"

import { Unit } from "@/types/unit-list"
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
  unitList,
  activeUnit,
  handleUnitChange,
}: {
  unitList: Unit[]
  activeUnit: string
  handleUnitChange: (newUnit: Unit) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {activeUnit}
          <Icons.chevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command className="max-h-[240px]">
          <CommandInput placeholder="Search unit..." className="h-9" />
          <CommandEmpty>No unit found.</CommandEmpty>
          <CommandGroup className="overflow-y-auto">
            {unitList.map((unit) => (
              <CommandItem
                key={unit.name}
                onSelect={(currentValue) => {
                  handleUnitChange(
                    unitList.find((unit) => unit.name === currentValue) ?? {
                      name: "Unit Not Found",
                      multiplier: 1,
                    }
                  )
                  setOpen(false)
                }}
              >
                {unit.name}
                <Icons.check
                  className={cn(
                    "ml-auto h-4 w-4",
                    activeUnit === unit.name ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
