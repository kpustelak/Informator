import { Link, Outlet } from '@tanstack/react-router'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr]">
      <aside className="border-r border-line bg-muted p-4">
        <p className="mb-6 text-lg font-semibold">Informator</p>
        <nav className="space-y-1 text-sm">
          <Link to="/" className="block rounded px-3 py-2 hover:bg-line">Treści</Link>
          <Link to="/login" className="block rounded px-3 py-2 hover:bg-line">Konto</Link>
        </nav>
      </aside>
      <main><Outlet /></main>
    </div>
  )
}
