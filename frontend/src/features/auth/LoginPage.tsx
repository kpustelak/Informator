export function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center drop-shadow-lg">
      <form className="w-full max-w-sm space-y-4 rounded-lg border border-line bg-surface p-8">
        <h1 className="text-2xl text-center font-medium pb-4">Login to control panel</h1>
        <input type="email" placeholder="name@company.com" className="w-full rounded border border-line px-3 py-2" />
        <input type="password" placeholder="secret password" className="w-full rounded border border-line px-3 py-2" />
        <button type="submit" className="w-full rounded-xl bg-accent py-4 font-medium text-white hover:bg-accent-hover">
          Continue
        </button>
      </form>
    </main>
  )
}
