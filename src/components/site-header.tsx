import { Link, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import { Button, buttonVariants } from "@/components/ui/button"

const navItems = [
  {
    title: "Calculator",
    href: "/",
  },
  {
    title: "Unit Converter",
    href: "/converter",
  },
]

export default function SiteHeader() {
  const { pathname } = useLocation()
  return (
    <header className="absolute left-1/2 -translate-x-1/2 pt-4">
      <nav className="flex items-center justify-center gap-2">
        {navItems.map((item, index) => (
          <Link
            to={item.href}
            className={twMerge(
              buttonVariants({ variant: "outline" }),
              pathname === item.href
                ? "bg-accent"
                : "hover:bg-accent/50 hover:text-accent-foreground"
            )}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
