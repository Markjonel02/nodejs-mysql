const Connection = require('../database/Connection');

module.exports = async (fields) => {
    try {
        // Validate fields parameter
        if (!fields || typeof fields !== "string") {
            throw new Error("Invalid fields parameter!");
        }

        // Prevent SQL injection by sanitizing input
        const safeFields = fields.split(',').map(field => field.trim()).join(',');

        const query = `SELECT ${safeFields} FROM user_accnts`;

        console.log("Executing Query:", query); // Debugging log

        const results = await Connection(query);

        if (!results || results.length === 0) {
            return { success: false, message: "No records found!" };
        }

        return { success: true, data: results };

    } catch (err) {
        console.error("Error retrieving data:", err.message);
        return { success: false, message: err.message };
    }
};
