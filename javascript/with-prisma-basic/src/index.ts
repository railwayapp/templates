import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Uncomment to add a user and post
  // (the email must be unique)
  // await prisma.user.create({
  //   data: {
  //     email: "new123@email.com",
  //     Post: {
  //       create: { title: "A new post", content: "This is some content" },
  //     },
  //   },
  // });

  const users = await prisma.user.findMany();

  console.log("--- Users ---");
  console.log(users);

  const posts = await prisma.post.findMany();

  console.log("--- Posts---");
  console.log(posts);
};

main()
  .then(async () => {
    await prisma.disconnect();
  })
  .catch(async (e) => {
    await prisma.disconnect();
    console.log(e.message);
  });
