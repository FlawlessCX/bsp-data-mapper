import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { LayoutDashboard, CheckSquare, MessageSquare, FileText } from 'lucide-react'
import { Dashboard } from './pages/Dashboard'
import { Tasks } from './pages/Tasks'
import { Messages } from './pages/Messages'
import { Files } from './pages/Files'
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

  const renderPage = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard currentRole={currentRole} />
      case 'tasks':
        return <Tasks currentRole={currentRole} />
      case 'messages':
        return <Messages currentRole={currentRole} />
      case 'files':
        return <Files currentRole={currentRole} />
      default:
        return <Dashboard currentRole={currentRole} />
    }
  }

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
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl">
            {renderPage()}
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
