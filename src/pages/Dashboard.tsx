interface DashboardProps {
  currentRole: string
}

export function Dashboard({ currentRole }: DashboardProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-foreground">Dashboard</h2>
      <p className="text-muted-foreground mb-8">
        Welcome to your dashboard.
      </p>
    </div>
  )
}
