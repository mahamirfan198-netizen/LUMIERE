import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/admin/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-6">
      <div className="bg-white p-8 md:p-12 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-gold/10 p-4 rounded-full">
            <Lock className="h-8 w-8 text-gold" />
          </div>
        </div>
        <h1 className="text-3xl font-serif text-center mb-2">Admin Portal</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Log in to manage your salon</p>

        {error && <div className="bg-red-50 text-red-600 p-3 mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input required type="email" className="w-full p-3 border border-gray-300 focus:border-gold outline-none" 
              value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@lumiere.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input required type="password" className="w-full p-3 border border-gray-300 focus:border-gold outline-none" 
              value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full bg-charcoal hover:bg-charcoal/90 text-white rounded-none py-6 uppercase tracking-widest text-xs mt-4">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}