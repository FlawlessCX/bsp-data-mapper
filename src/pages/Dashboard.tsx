import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import { Button } from '../components/ui/button'

interface DashboardProps {
  currentRole: string
}

export function Dashboard({ currentRole }: DashboardProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2 text-foreground">Dashboard</h2>
      <p className="text-muted-foreground mb-8">
        Welcome back! Here's what's happening with your account.
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Matched Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">2</p>
            <p className="text-xs text-muted-foreground mt-2">Active partnerships</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">5</p>
            <p className="text-xs text-muted-foreground mt-2">In marketplace</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-orange-600">3</p>
            <p className="text-xs text-muted-foreground mt-2">Requires action</p>
          </CardContent>
        </Card>
      </div>

      {/* Apps Section - Only for Buyers */}
      {currentRole === 'buying-partner' && (
        <>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Apps</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">🏬 Digital Marketplace</CardTitle>
                <CardDescription>Browse and discover available listings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore client books and businesses available for acquisition. Filter by location, AUM, and other criteria.
                </p>
                <Button size="sm">Open Marketplace</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">💰 Borrowing Calculator</CardTitle>
                <CardDescription>Estimate acquisition financing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate potential borrowing capacity and financing options for acquisitions.
                </p>
                <Button size="sm">Open Calculator</Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Content Card */}
      <Card>
        <CardHeader>
          <CardTitle>Welcome to BSP Data Mapper</CardTitle>
          <CardDescription>
            This is a prototype platform for managing buyer-seller partnerships in the financial advisory space.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">📚 Get Started</h4>
              <p className="text-sm text-muted-foreground">Learn how to navigate the platform and get the most out of your account.</p>
            </div>
            <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/10">
              <h4 className="font-semibold text-foreground mb-2">📞 Need Help?</h4>
              <p className="text-sm text-muted-foreground">Contact our support team or check out our help documentation.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
