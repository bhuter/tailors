const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();

// Create PostgreSQL connection
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",  // Replace with your actual PostgreSQL password
    database: "tailorscollege"
});

client.connect();
app.use(cors());
app.use(express.json());

// Submit an application
app.post("/apply", async (req: any, res: any) => {
    const {
        firstName,
        secondName,
        phone,
        email,
        district,
        sector,
        cell,
        village,
        gender,
        dob
    } = req.body;

    // Input validation
    if (!firstName || !secondName || !phone || !email || !district || !sector || !cell || !village || !dob) {
        return res.status(400).json({ message: "All fields marked with * are required." });
    }

    try {
        // Check if an application with the same phone or email already exists
        const checkApplicationSql = `
            SELECT * FROM applications WHERE phone = $1 OR email = $2
        `;
        const checkApplicationValues = [phone, email];
        const existingApplicationResult = await client.query(checkApplicationSql, checkApplicationValues);

        if (existingApplicationResult.rows.length > 0) {
            return res.status(400).json({ message: "Phone or email already exists in the system." });
        }

        // Default values for status and done_at
        const status = 'pending'; // default status when an application is submitted
        const doneAt = null; // will be filled when the application is processed

        // Insert the application into the database
        const insertSql = `
            INSERT INTO applications (first_name, second_name, phone, email, district, sector, cell, village, gender, dob, status, done_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *
        `;
        const values = [firstName, secondName, phone, email, district, sector, cell, village, gender, dob, status, doneAt];

        const result = await client.query(insertSql, values);

        return res.status(201).json({ message: "Application submitted successfully!", application: result.rows[0] });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: "Error: " + error.message });
        }
        return res.status(500).json({ message: "An unknown error occurred." });
    }
});
// Submit a contact message
app.post("/contact", async (req:any, res:any) => {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Insert the message into the database
        const insertSql = `
            INSERT INTO contact_messages (name, email, message)
            VALUES ($1, $2, $3) RETURNING *
        `;
        const values = [name, email, message];

        const result = await client.query(insertSql, values);

        return res.status(201).json({ message: "Message sent successfully!", contactMessage: result.rows[0] });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: "Error: " + error.message });
        }
        return res.status(500).json({ message: "An unknown error occurred." });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
