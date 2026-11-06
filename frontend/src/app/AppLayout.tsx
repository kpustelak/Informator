import { Outlet } from '@tanstack/react-router'
import {Hero} from "@/components/blocks/Hero.tsx";
import {Navigation} from "@/components/blocks/Navigation";
import {navItems, navTitle} from "./navigation";

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr]">
      <aside className="border-r border-line bg-muted">
          <Hero></Hero>
          <div className="px-4">
              <Navigation title={navTitle} items={navItems} />
          </div>
      </aside>
        <div>
            <Hero />
            <main><Outlet /></main>
        </div>
    </div>
  )
}
