const Connection = require('../database/Connection');

module.exports = async (username, password) => {
    try {
        // Ensure username and password are provided
        if (!username || !password) {
            throw new Error("Username and password are required!");
        }

        // Check if username already exists to prevent duplicates
        const checkQuery = `SELECT id FROM user_accnts WHERE username = '${username}'`;
        const existingUser = await Connection(checkQuery);

        if (existingUser.length > 0) {
            throw new Error("Username already exists!");
        }

        // Properly structured INSERT statement
        const query = `INSERT INTO user_accnts (username, password) VALUES ('${username}', ('${password}'))`;

        await Connection(query);
        return { success: true, message: "User created successfully" };

    } catch (err) {
        console.error("Error:", err.message);
        return { success: false, message: err.message };
    }
};
