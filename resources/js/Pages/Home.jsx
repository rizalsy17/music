"use client"

import { useState } from "react"
import { Head, router } from "@inertiajs/react"
import {
  Settings,
} from "lucide-react"

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Cruel",
    artist: "Jackson Wang",
    duration: "3:13",
    currentTime: "1:23",
  })

  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(75)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isMobilePlayerOpen, setIsMobilePlayerOpen] = useState(false)

  const sidebarItems = [
    { name: "Main", active: true },
    { name: "Radio", active: false },
    { name: "Podcasts", active: false },
    { name: "Books", active: false },
  ]

  const myMusicItems = [
    { name: "Tracks", active: false },
    { name: "Albums", active: false },
    { name: "Artists", active: false },
    { name: "Playlists", active: false },
    { name: "Files", active: false },
  ]

  const playlists = [
    { name: "Dejavu", tracks: 30, color: "bg-orange-400", image: "/dejavu-album-cover.jpg" },
    { name: "Playlist of the day", tracks: 28, color: "bg-blue-500", image: "/daily-playlist-cover.jpg" },
    { name: "Something new", tracks: 37, color: "bg-purple-400", image: "/new-music-playlist.jpg" },
    { name: "Exclusive show", tracks: 17, color: "bg-green-500", image: "/exclusive-show-cover.jpg" },
  ]

  const nowPlaying = [
    { title: "Cruel", artist: "Jackson Wang", duration: "3:25", active: true },
    { title: "Gum", artist: "Jessie", duration: "2:42", active: false },
    { title: "Softcore", artist: "The Neighbourhood", duration: "3:26", active: false },
    { title: "Mockingbird", artist: "Eminem", duration: "4:10", active: false },
    { title: "Get money i love it", artist: "Bloo", duration: "2:19", active: false },
    { title: "MOVE", artist: "TAEMIN", duration: "3:31", active: false },
    { title: "In The Party", artist: "Flo Milli", duration: "2:17", active: false },
    { title: "Drowning", artist: "WOODZ", duration: "4:10", active: false },
    { title: "Zime Blue", artist: "Markul", duration: "3:02", active: false },
  ]

  const recommendations = [
    { title: "Drunk-Dazed", artist: "ENHYPEN", duration: "3:13", image: "/drunk-dazed-album.jpg" },
    { title: "Wrecked", artist: "Imagine Dragons", duration: "4:04", image: "/wrecked-album-cover.jpg" },
  ]

  return (
    <>
      <Head title="Music Player" />
      <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        <div
          className={`
          fixed lg:relative lg:translate-x-0 z-50 lg:z-auto
          w-64 bg-gray-800 flex flex-col h-full
          transform transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:block
        `}
        >
          <div className="p-4">
            <button className="text-white mb-6 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className="text-white mb-6 hidden lg:block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-4">
            <ul className="space-y-2 mb-8">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded-lg transition-colors ${
                      item.active ? "bg-gray-700 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <h3 className="text-white font-medium mb-4">My music</h3>
              <ul className="space-y-2">
                {myMusicItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#"
                      className="block py-2 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-700">
            <a href="#" className="block py-2 px-3 text-gray-300 hover:text-white transition-colors">
              Settings
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
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="flex items-center justify-between p-4 lg:p-6 bg-gray-800">
            <div className="flex items-center space-x-4">
              <button className="text-white lg:hidden" onClick={() => setIsMobileSidebarOpen(true)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden sm:block flex-1 max-w-md">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <span className="text-white text-sm lg:text-base hidden sm:block">Tasha E.</span>
              <div className="w-8 h-8 bg-gray-600 rounded-full overflow-hidden">
                <img src="/diverse-user-avatars.png" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Main</h1>

              <div className="relative mb-6 lg:mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-pink-500 p-4 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <p className="text-sm opacity-90 mb-2">Billie Eilish</p>
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">What Was I Made For?</h2>
                    <button className="bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
                      <svg className="w-4 lg:w-5 h-4 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-sm lg:text-base">Listen now</span>
                    </button>
                  </div>
                  <div className="w-32 h-32 lg:w-48 lg:h-48 mx-auto lg:mx-0">
                    <img
                      src="/billie-eilish-what-was-i-made-for.jpg"
                      alt="Billie Eilish"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold">Playlists for you</h3>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    View all
                  </a>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  {playlists.map((playlist) => (
                    <div
                      key={playlist.name}
                      className="bg-gray-800 rounded-lg p-3 lg:p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <div className="aspect-square mb-2 lg:mb-3 rounded-lg overflow-hidden">
                        <img
                          src={playlist.image || "/placeholder.svg"}
                          alt={playlist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-medium mb-1 text-sm lg:text-base truncate">{playlist.name}</h4>
                      <p className="text-xs lg:text-sm text-gray-400">{playlist.tracks} tracks</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold">You may also like</h3>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    View all
                  </a>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  {recommendations.map((track) => (
                    <div
                      key={track.title}
                      className="flex items-center space-x-3 lg:space-x-4 p-2 lg:p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={track.image || "/placeholder.svg"}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm lg:text-base truncate">{track.title}</h4>
                        <p className="text-xs lg:text-sm text-gray-400 truncate">{track.artist}</p>
                      </div>
                      <span className="text-xs lg:text-sm text-gray-400 flex-shrink-0">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-80 bg-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Now playing</h3>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  View all
                </a>
              </div>
              <div className="space-y-3">
                {nowPlaying.map((track, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                      track.active ? "bg-gray-700" : "hover:bg-gray-700"
                    }`}
                  >
                    <div className="w-10 h-10 bg-gray-600 rounded-lg overflow-hidden">
                      <img
                        src={`/abstract-geometric-shapes.png?height=40&width=40&query=${track.title} album`}
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{track.title}</h4>
                      <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-gray-400">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border-t border-gray-700">
            <button
              className="lg:hidden w-full p-2 text-left border-b border-gray-700"
              onClick={() => setIsMobilePlayerOpen(!isMobilePlayerOpen)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Now playing queue</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transform transition-transform ${isMobilePlayerOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isMobilePlayerOpen && (
              <div className="lg:hidden max-h-60 overflow-y-auto p-4 border-b border-gray-700">
                <div className="space-y-2">
                  {nowPlaying.slice(0, 5).map((track, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                        track.active ? "bg-gray-700" : "hover:bg-gray-700"
                      }`}
                    >
                      <div className="w-8 h-8 bg-gray-600 rounded-lg overflow-hidden">
                        <img
                          src={`/abstract-geometric-shapes.png?height=32&width=32&query=${track.title} album`}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{track.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                      </div>
                      <span className="text-xs text-gray-400">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 lg:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/cruel-jackson-wang.jpg" alt="Current track" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm lg:text-base truncate">{currentTrack.title}</h4>
                    <p className="text-xs lg:text-sm text-gray-400 truncate">{currentTrack.artist}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 lg:space-x-4">
                  <button className="text-gray-400 hover:text-white hidden lg:block">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white hidden sm:block">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-4 lg:w-5 h-4 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-4 lg:w-5 h-4 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <button className="text-gray-400 hover:text-white hidden sm:block">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 6v12l8.5-6L13 6zm-1 0L3.5 12 12 18V6z" />
                    </svg>
                  </button>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  </button>
                  <div className="w-20 h-1 bg-gray-600 rounded-full">
                    <div className="w-3/4 h-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
