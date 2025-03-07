import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/Dashboard'
import GuestDashboard from './pages/guest/Dashboard'
import GuestManagement from './pages/admin/GuestManagement'
import RoomManagement from './pages/admin/RoomManagement'
import GuestProfile from './pages/guest/Profile'
import MyRoom from './pages/guest/MyRoom'
import BookRoom from './pages/guest/BookRoom'
import MaintenanceRequest from './pages/guest/MaintenanceRequest'
import ChatAssistant from './pages/guest/ChatAssistant'
import Notifications from './pages/guest/Notifications'
import GuestLayout from './components/GuestLayout'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
          {/* Guest routes with layout */}
          <Route path="/guest" element={<GuestLayout />}>
            <Route path="dashboard" element={<GuestDashboard />} />
            <Route path="profile" element={<GuestProfile />} />
            <Route path="my-room" element={<MyRoom />} />
            <Route path="book-room" element={<BookRoom />} />
            <Route path="maintenance" element={<MaintenanceRequest />} />
            <Route path="chat" element={<ChatAssistant />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/guests" element={<GuestManagement />} />
          <Route path="/admin/rooms" element={<RoomManagement />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 