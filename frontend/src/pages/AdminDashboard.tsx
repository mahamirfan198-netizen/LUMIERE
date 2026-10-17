import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';
import { LogOut, Calendar, User, Phone } from 'lucide-react';

interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  date: string;
  timeSlot: string;
  status: string;
  service: { name: string; price: number };
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Appointment[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const fetchBookings = async () => {
    try {
      const res = await api.get('/admin/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      setError('Failed to fetch bookings. Please log in again.');
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchBookings();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await api.patch(`/admin/bookings/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBookings(); // Refresh list
    } catch (err) {
      alert('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-charcoal text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-serif">LUMIÈRE Admin</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gold transition-colors">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-xl font-serif mb-6 text-charcoal">Recent Bookings</h2>
        
        {error && <div className="bg-red-50 text-red-600 p-4 mb-4">{error}</div>}

        <div className="bg-white border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Service</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-2 font-medium"><User className="h-4 w-4 text-gray-400" /> {booking.customerName}</td>
                  <td className="p-4 text-gray-600"><Phone className="h-4 w-4 inline mr-2 text-gray-400" />{booking.phone}</td>
                  <td className="p-4 text-gray-600">{booking.service.name}</td>
                  <td className="p-4 text-gray-600">
                    <Calendar className="h-4 w-4 inline mr-2 text-gray-400" />
                    {new Date(booking.date).toLocaleDateString()} at {booking.timeSlot}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                      booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select 
                      className="border border-gray-300 rounded p-1 text-sm bg-white"
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && !error && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}