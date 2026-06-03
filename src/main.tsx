import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

function App() {
  const [currentRole, setCurrentRole] = useState('buying-partner')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BSP Data Mapper</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentRole('buying-partner')}
              className={`px-4 py-2 rounded ${currentRole === 'buying-partner' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Buying Partner
            </button>
            <button
              onClick={() => setCurrentRole('selling-partner')}
              className={`px-4 py-2 rounded ${currentRole === 'selling-partner' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Selling Partner
            </button>
            <button
              onClick={() => setCurrentRole('internal')}
              className={`px-4 py-2 rounded ${currentRole === 'internal' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Internal Team
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-lg mb-6">
          Logged in as: <span className="font-bold text-blue-600">{currentRole}</span>
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-600 font-medium">Matched Cases</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-600 font-medium">Active Listings</h3>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-600 font-medium">Pending Tasks</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Welcome to BSP Data Mapper</h3>
          <p className="text-gray-700">
            This is a prototype for managing buyer-seller partnerships in the financial advisory space.
          </p>
        </div>
      </main>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
