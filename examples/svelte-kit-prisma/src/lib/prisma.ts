import Prisma, * as PrismaAll from "@prisma/client"; // make sure postinstall is ran.
const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient;
export default PrismaClient;
const prisma = new PrismaClient();
export function connect(): typeof prisma {
    prisma.$connect()
    return prisma
}

export function disconnect(): typeof prisma {
    prisma.$disconnect()
    return prisma
}