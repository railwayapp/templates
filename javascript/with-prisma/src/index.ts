import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const args = process.argv.slice(2);

const createItem = async () => {
  const value = args[1];

  const item = await prisma.item.create({
    data: { value },
  });

  console.log(`Created item`);
  console.log(item);
};

const getItems = async () => {
  const items = await prisma.item.findMany();
  console.log(`Found ${items.length}`);
  console.log(items);
};

if (args[0] === "create" && args.length === 2) {
  createItem().then(() => process.exit(0));
} else if (args[0] === "list") {
  getItems().then(() => process.exit(0));
} else {
  console.log("Invalid command. Usage:");
  console.log(`  Create item: yarn start create [value]`);
  console.log(`  List items:  yarn start list`);
}
