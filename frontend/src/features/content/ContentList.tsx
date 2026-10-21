import { useContentList } from './api'

export function ContentList({ workspaceId }: { workspaceId: string }) {
  const { data, isPending, error } = useContentList(workspaceId)

  if (isPending) return <p className="p-6 text-ink-soft">Ładowanie…</p>
  if (error) return <p className="p-6 text-red-600">Nie udało się pobrać treści.</p>
  if (data.length === 0) return <p className="p-6 text-ink-soft">Brak wpisów.</p>

  return (
    <ul className="divide-y divide-line">
      {data.map((e) => (
        <li key={e.id} className="flex items-center justify-between px-6 py-3 hover:bg-muted">
          <span className="font-medium">{e.key}</span>
          <span className="text-sm text-ink-soft">{e.type}</span>
        </li>
      ))}
    </ul>
  )
}
