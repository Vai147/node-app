import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({
    path: './env'
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", error => {
            console.log("Error in starting the server", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: `)
        })
    } catch (error) {
        console.log("Error in starting the server", error);
    }
}

startServer();
