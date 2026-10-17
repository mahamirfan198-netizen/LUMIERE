const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  const hair = await prisma.serviceCategory.create({ data: { name: 'Hair Services' } });
  const makeup = await prisma.serviceCategory.create({ data: { name: 'Makeup & Bridal' } });
  const skin = await prisma.serviceCategory.create({ data: { name: 'Skincare & Spa' } });

  await prisma.service.createMany({
    data: [
      { name: 'Signature Haircut', description: 'Precision cut and blow dry.', price: 4500, duration: 60, categoryId: hair.id },
      { name: 'Keratin Treatment', description: 'Smoothing and frizz control.', price: 15000, duration: 120, categoryId: hair.id },
      { name: 'Balayage & Color', description: 'Custom hand-painted highlights.', price: 12000, duration: 150, categoryId: hair.id },
      { name: 'Party Makeup', description: 'Flawless HD makeup for events.', price: 8000, duration: 90, categoryId: makeup.id },
      { name: 'Bridal Trial', description: 'Consultation and full trial look.', price: 20000, duration: 120, categoryId: makeup.id },
      { name: 'Complete Bridal Package', description: 'Hair, makeup, and draping.', price: 65000, duration: 180, categoryId: makeup.id },
      { name: 'Hydrating Facial', description: 'Deep moisture and glow.', price: 5000, duration: 60, categoryId: skin.id },
      { name: 'Deep Cleansing Facial', description: 'Extraction and pore refinement.', price: 6500, duration: 75, categoryId: skin.id },
      { name: 'Full Body Massage', description: 'Relaxing aromatherapy massage.', price: 7000, duration: 60, categoryId: skin.id },
    ],
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });