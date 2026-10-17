import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/services', async (req, res) => {
  const categories = await prisma.serviceCategory.findMany({ include: { services: true } });
  res.json(categories);
});

app.post('/api/bookings', async (req, res) => {
  const { customerName, phone, email, date, timeSlot, serviceId, notes } = req.body;
  try {
    const booking = await prisma.appointment.create({
      data: { customerName, phone, email, date: new Date(date), timeSlot, serviceId, notes, status: 'PENDING' },
    });
    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@lumiere.com' && password === 'admin123') {
    res.json({ success: true, token: 'fake-jwt-token-12345' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/admin/bookings', async (req, res) => {
  const token = req.headers.authorization;
  if (token !== 'Bearer fake-jwt-token-12345') return res.status(401).json({ error: 'Unauthorized' });

  const bookings = await prisma.appointment.findMany({ include: { service: true }, orderBy: { createdAt: 'desc' } });
  res.json(bookings);
});

app.patch('/api/admin/bookings/:id', async (req, res) => {
  const token = req.headers.authorization;
  if (token !== 'Bearer fake-jwt-token-12345') return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await prisma.appointment.update({
      where: { id: String(id) },
      data: { status },
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));