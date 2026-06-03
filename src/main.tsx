import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { LayoutDashboard, CheckSquare, MessageSquare, FileText } from 'lucide-react'
import './styles/globals.css'

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
  { label: 'Tasks', icon: CheckSquare, id: 'tasks' },
  { label: 'Messages', icon: MessageSquare, id: 'messages' },
  { label: 'Files', icon: FileText, id: 'files' },
]

function App() {
  const [currentRole, setCurrentRole] = useState('buying-partner')
  const [activeMenu, setActiveMenu] = useState('dashboard')

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">BSP Data Mapper</h1>
          <div className="flex gap-2">
            <Button
              onClick={() => setCurrentRole('buying-partner')}
              variant={currentRole === 'buying-partner' ? 'default' : 'outline'}
              size="sm"
            >
              Buyer
            </Button>
            <Button
              onClick={() => setCurrentRole('selling-partner')}
              variant={currentRole === 'selling-partner' ? 'default' : 'outline'}
              size="sm"
            >
              Seller
            </Button>
            <Button
              onClick={() => setCurrentRole('internal')}
              variant={currentRole === 'internal' ? 'default' : 'outline'}
              size="sm"
            >
              Internal
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border shadow-sm">
          <div className="p-6 border-b border-border">
            <p className="text-sm font-medium text-muted-foreground">Role</p>
            <p className="text-lg font-bold text-foreground mt-1">
              {currentRole === 'buying-partner' ? 'Buying Partner' : currentRole === 'selling-partner' ? 'Selling Partner' : 'Internal Team'}
            </p>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition flex items-center gap-3 ${
                        activeMenu === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto pb-32">
          <div className="max-w-6xl">
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
        </main>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
