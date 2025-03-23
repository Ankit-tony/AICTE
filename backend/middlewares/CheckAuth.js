const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.cookies.token; // Extract JWT from cookies

    if (!token) {
        return res.status(401).json({ error: "Unauthorized! Token is missing" });
    }

    try {
        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to request
        next(); // Continue to the next middleware/controller
    } catch (error) {
        console.error("Invalid token:", error);
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}

module.exports = authMiddleware;
