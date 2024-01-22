const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    // Create new categories
    await database.category.createMany({
      data: [
        { name: "Tutorials" },
        { name: "Courses" },
        { name: "Live Lessons" }
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
