import express from "express";

//database connection
import "./database";

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running in port 3000"));
