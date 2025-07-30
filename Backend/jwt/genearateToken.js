const jwt = require("jsonwebtoken");

const createTokenSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "10d",
    });

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
        secure: false,
sameSite: "lax" // best for localhost
    });
};
module.exports = createTokenSaveCookie;