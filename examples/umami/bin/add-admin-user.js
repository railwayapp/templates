const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

const hashPassword = password => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

async function main() {
  const admin = await prisma.account.findUnique({ where: { username: 'admin' } });

  if (admin) {
    console.log('Admin user already exists!');
    return;
  }

  const password = await hashPassword(process.env.ADMIN_PASSWORD || 'umami');
  await prisma.account.create({
    data: {
      username: 'admin',
      password: password,
      is_admin: true,
    },
  });

  console.log('Admin user created!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
