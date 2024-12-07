require('dotenv').config();
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


app.use(express.json());
app.use(cors());

MONGODB_URI="mongodb+srv://abdulwasih03:5EtkOshCWE74KqkT@cluster0.j8pts.mongodb.net/Legal-Lookup?retryWrites=true&w=majority"


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Root Route
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Define the Section schema and model
const sectionSchema = new mongoose.Schema({
  ipc_section: {
    type: String,
    required: true,
  },
  bns_section: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: [String],  // Array of strings
    required: true,
  },
  keywords: {
    type: [String],  // Array of strings
    required: true,
  },
});

const Section = mongoose.model("Section", sectionSchema);

// API Endpoint to Get All Sections
app.get('/allsections', async (req, res) => {
  try {
    let sections = await Section.find({});
    console.log("All Sections Fetched");
    res.status(200).json(sections);  // Send a JSON response
  } catch (error) {
    console.error("Error fetching sections:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
