import { useStore } from '../store/mockData'

export function Dashboard() {
  const { currentUserRole, partners, listings } = useStore()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Works!</h1>
      <p className="mb-2">Role: {currentUserRole}</p>
      <p>Partners: {partners.length}</p>
      <p>Listings: {listings.length}</p>
    </div>
  )
}
