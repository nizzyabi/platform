const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    // Create new categories
    await database.category.createMany({
      data: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "NextJS" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "SQL" },
        { name: "HTML & CSS" },
        { name: "HTML" },
        { name: "CSS"},
        { name: "Study"}
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
