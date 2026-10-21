export function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-muted">
      <form className="w-full max-w-sm space-y-4 rounded-lg border border-line bg-surface p-8">
        <h1 className="text-2xl font-semibold">Zaloguj się</h1>
        <input type="email" placeholder="E-mail" className="w-full rounded border border-line px-3 py-2" />
        <input type="password" placeholder="Hasło" className="w-full rounded border border-line px-3 py-2" />
        <button type="submit" className="w-full rounded bg-accent py-2 font-medium text-white hover:bg-accent-hover">
          Zaloguj
        </button>
      </form>
    </main>
  )
}
