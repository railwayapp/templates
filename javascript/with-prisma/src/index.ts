import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
  try {
    const result = await prisma.queryRaw`SELECT NOW()`;
    console.log(result[0]);
  } catch (e) {
    console.log();
  } finally {
    await prisma.disconnect();
  }
})();
