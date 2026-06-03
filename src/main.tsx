import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const menuItems = [
  { label: 'Dashboard', icon: '📊', id: 'dashboard' },
  { label: 'Tasks', icon: '✓', id: 'tasks' },
  { label: 'Messages', icon: '💬', id: 'messages' },
  { label: 'Files', icon: '📄', id: 'files' },
]

function App() {
  const [currentRole, setCurrentRole] = useState('buying-partner')
  const [activeMenu, setActiveMenu] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white shadow">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BSP Data Mapper</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentRole('buying-partner')}
              className={`px-4 py-2 rounded text-sm font-medium transition ${
                currentRole === 'buying-partner' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Buyer
            </button>
            <button
              onClick={() => setCurrentRole('selling-partner')}
              className={`px-4 py-2 rounded text-sm font-medium transition ${
                currentRole === 'selling-partner' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Seller
            </button>
            <button
              onClick={() => setCurrentRole('internal')}
              className={`px-4 py-2 rounded text-sm font-medium transition ${
                currentRole === 'internal' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Internal
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-600">Role</p>
            <p className="text-lg font-bold text-gray-900 mt-1">
              {currentRole === 'buying-partner' ? 'Buying Partner' : currentRole === 'selling-partner' ? 'Selling Partner' : 'Internal Team'}
            </p>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                      activeMenu === item.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200 bg-gray-50">
            <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded transition">
              ⚙️ Settings
            </button>
            <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded transition mt-2">
              🚪 Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto pb-32">
          <div className="max-w-6xl">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Dashboard</h2>
            <p className="text-gray-600 mb-8">
              Welcome back! Here's what's happening with your account.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
                <h3 className="text-gray-600 font-medium text-sm">Matched Cases</h3>
                <p className="text-4xl font-bold text-blue-600 mt-2">2</p>
                <p className="text-xs text-gray-500 mt-2">Active partnerships</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
                <h3 className="text-gray-600 font-medium text-sm">Active Listings</h3>
                <p className="text-4xl font-bold text-green-600 mt-2">5</p>
                <p className="text-xs text-gray-500 mt-2">In marketplace</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
                <h3 className="text-gray-600 font-medium text-sm">Pending Tasks</h3>
                <p className="text-4xl font-bold text-orange-600 mt-2">3</p>
                <p className="text-xs text-gray-500 mt-2">Requires action</p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Welcome to BSP Data Mapper</h3>
              <p className="text-gray-700 mb-6">
                This is a prototype platform for managing buyer-seller partnerships in the financial advisory space.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">📚 Get Started</h4>
                  <p className="text-sm text-blue-800">Learn how to navigate the platform and get the most out of your account.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">📞 Need Help?</h4>
                  <p className="text-sm text-green-800">Contact our support team or check out our help documentation.</p>
                </div>
              </div>
            </div>
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
