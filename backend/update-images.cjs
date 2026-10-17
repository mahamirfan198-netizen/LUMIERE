const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const images = {
  'Signature Haircut': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80',
  'Keratin Treatment': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
  'Balayage & Color': 'https://images.unsplash.com/photo-1516975080661-aa2a12c8bc20?auto=format&fit=crop&q=80',
  'Party Makeup': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80',
  'Bridal Trial': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
  'Complete Bridal Package': 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80',
  'Hydrating Facial': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
  'Deep Cleansing Facial': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
  'Full Body Massage': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80'
};

async function main() {
  console.log('Updating images...');
  for (const [name, url] of Object.entries(images)) {
    await prisma.service.updateMany({
      where: { name: name },
      data: { imageUrl: url }
    });
    console.log('Updated: ' + name);
  }
  console.log('All images updated successfully!');
}

main().catch(console.error).finally(() => prisma.$disconnect());