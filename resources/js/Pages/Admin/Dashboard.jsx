"use client"

import { useState } from "react"
import {
  Users,
  Music,
  TrendingUp,
  DollarSign,
  Play,
  Pause,
  MoreVertical,
  Search,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react"
import { router } from '@inertiajs/react'

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const stats = [
    { title: "Total Users", value: "12,543", change: "+12%", icon: Users, color: "bg-blue-500" },
    { title: "Total Songs", value: "8,921", change: "+8%", icon: Music, color: "bg-green-500" },
    { title: "Monthly Plays", value: "2.4M", change: "+23%", icon: TrendingUp, color: "bg-purple-500" },
    { title: "Revenue", value: "$45,231", change: "+15%", icon: DollarSign, color: "bg-orange-500" },
  ]

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", joined: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", joined: "2024-01-14" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Inactive", joined: "2024-01-13" },
  ]

  const topTracks = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", plays: "2.1M", duration: "3:20" },
    { id: 2, title: "Watermelon Sugar", artist: "Harry Styles", plays: "1.8M", duration: "2:54" },
    { id: 3, title: "Levitating", artist: "Dua Lipa", plays: "1.6M", duration: "3:23" },
  ]

  const togglePlay = (trackId) => {
    setCurrentlyPlaying(currentlyPlaying === trackId ? null : trackId)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700">
                <TrendingUp className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
                <Users className="w-5 h-5" />
                <span>Users</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
                <Music className="w-5 h-5" />
                <span>Music</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
            <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.post('/logout') // langsung hit route logout
      }}
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700"
    >
      <Settings className="w-5 h-5" />
      <span>Logout</span>
    </a>

            </nav>
          </div>
        </div>
      )}

      <div className="flex">
        <div className="hidden lg:block w-64 bg-gray-800 min-h-screen p-4">
          <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700">
              <TrendingUp className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
              <Users className="w-5 h-5" />
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
              <Music className="w-5 h-5" />
              <span>Music</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
            <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.post('/logout') // langsung hit route logout
      }}
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700"
    >
      <Settings className="w-5 h-5" />
      <span>Logout</span>
    </a>
          </nav>
        </div>

        <div className="flex-1 p-4 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-700">
                        <td className="py-3">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                          </div>
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 text-gray-400">{user.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Top Tracks</h3>
              <div className="space-y-3">
                {topTracks.map((track) => (
                  <div key={track.id} className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => togglePlay(track.id)}
                        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600"
                      >
                        {currentlyPlaying === track.id ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </button>
                      <div>
                        <p className="font-medium">{track.title}</p>
                        <p className="text-gray-400 text-sm">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400 text-sm">{track.plays}</span>
                      <span className="text-gray-400 text-sm">{track.duration}</span>
                      <button className="p-1 hover:bg-gray-600 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
