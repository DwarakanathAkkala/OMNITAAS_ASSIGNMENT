const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

const PORT = 5000;
const SECRET_KEY = 'dwarakanath-akkala';
const TOKEN_EXPIRY = '1h';

const VALID_CRED = {
    username: "admin",
    password: "admin123"
};

const tokenBlacklist = new Set();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server running successfully on http://localhost:5000");
})