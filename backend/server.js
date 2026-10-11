
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const prisma = require("./db");

const app = express();
const PORT = process.env.PORT || 5001;

// STEP 1: Enable CORS for React frontend
app.use(
    cors({
        origin: /^http:\/\/localhost:517\d+$/,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// STEP 2: Enable JSON requests
app.use(express.json());

// STEP 3: Home route
app.get("/", (req, res) => {
    res.json({
        message: "Global Sports Marketplace 2 API",
        status: "running",
    });
});

// STEP 4: Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is running",
    });
});

// STEP 5: Get all sports jobs
app.get("/api/jobs", async (req, res) => {
    try {
        const jobs = await prisma.jobPosting.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        res.json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);

        res.status(500).json({
            error: "Unable to fetch jobs",
        });
    }
});

// STEP 6: Start backend server
app.listen(PORT, () => {
    console.log(
        `Backend running on http://localhost:${PORT}`
    );
});
