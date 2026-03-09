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

app.post('/api/login', (req, res) => {

    const { username, password } = req.body;

    if (username === VALID_CRED.username && password === VALID_CRED.password) {
        return res.status(200).json({
            username, message: 'Login Successful'
        });
    }

    return res.status(401).json({
        message: 'Invalid username or password'
    });
});