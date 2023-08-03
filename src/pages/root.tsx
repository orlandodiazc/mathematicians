import { Outlet } from "react-router-dom"

import SiteHeader from "@/components/site-header"

export default function Root() {
  return (
    <div>
      <SiteHeader />
      <div className="grid min-h-screen place-content-center">
        <section className="mx-auto rounded-xl border">
          <div className="max-w-lg p-8 pt-3">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  )
}
