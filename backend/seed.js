
require("dotenv").config();

const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    console.log("Starting database seeding...");

    // STEP 1: Create a test employer
    const passwordHash = await bcrypt.hash(
        "DemoEmployer2026!",
        12
    );

    const employer = await prisma.user.upsert({
        where: {
            email: "employer@test.com",
        },
        update: {},
        create: {
            name: "Demo Employer",
            email: "employer@test.com",
            passwordHash: passwordHash,
            role: "EMPLOYER",
        },
    });

    console.log("Employer ready:", employer.id);

    // STEP 2: Check if the sports job exists
    const existingJob = await prisma.jobPosting.findFirst({
        where: {
            title: "Tennis Coach",
            postedById: employer.id,
        },
    });

    // STEP 3: Create the sports job if needed
    if (!existingJob) {
        const job = await prisma.jobPosting.create({
            data: {
                title: "Tennis Coach",
                description:
                    "Seeking an enthusiastic tennis coach for youth training. Experience coaching young athletes and strong communication skills required.",
                location: "Barcelona, Spain",
                sport: "Tennis",
                postedById: employer.id,
            },
        });

        console.log("Job created:", job.id);
    } else {
        console.log("Job already exists:", existingJob.id);
    }

    console.log("Database seeding completed!");
}

// STEP 4: Run the script
main()
    .catch((error) => {
        console.error("Seeding failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
