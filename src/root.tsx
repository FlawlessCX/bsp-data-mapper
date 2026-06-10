import { Outlet } from 'react-router-dom'
import './styles/globals.css'
import { useStore } from './store/mockData'

export function RootLayout() {
  const { currentUserRole, setUserRole } = useStore()

  return (
    <div className="min-h-screen bg-base-100">
      <nav className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <h1 className="text-2xl font-bold px-4">BSP Platform</h1>
        </div>
        <div className="flex-none gap-2 px-4">
          <div className="btn-group">
            <button
              onClick={() => setUserRole('buying-partner')}
              className={`btn btn-sm ${currentUserRole === 'buying-partner' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Buying Partner
            </button>
            <button
              onClick={() => setUserRole('selling-partner')}
              className={`btn btn-sm ${currentUserRole === 'selling-partner' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Selling Partner
            </button>
            <button
              onClick={() => setUserRole('internal')}
              className={`btn btn-sm ${currentUserRole === 'internal' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Internal BP
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}
