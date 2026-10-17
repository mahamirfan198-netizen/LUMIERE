const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const images = {
  'Signature Haircut': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=80',
  'Keratin Treatment': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=80',
  'Balayage & Color': 'https://images.unsplash.com/photo-1516975080661-aa2a12c8bc20?w=800&auto=format&fit=crop&q=80',
  'Party Makeup': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80',
  'Bridal Trial': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
  'Complete Bridal Package': 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80',
  'Hydrating Facial': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80',
  'Deep Cleansing Facial': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80',
  'Full Body Massage': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
};

async function main() {
  console.log('Fetching all services from database...');
  const services = await prisma.service.findMany();
  
  for (const service of services) {
    const imgUrl = images[service.name];
    if (imgUrl) {
      await prisma.service.update({
        where: { id: service.id },
        data: { imageUrl: imgUrl }
      });
      console.log(`✅ Updated image for: ${service.name}`);
    } else {
      console.log(`⚠️ No image found for: ${service.name}`);
    }
  }
  console.log('Done! All images updated.');
}

main().catch(console.error).finally(() => prisma.$disconnect());