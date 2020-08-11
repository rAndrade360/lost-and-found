import dotenv from "dotenv";
dotenv.config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});
import express from "express";
import routes from "./routes";
import path from "path";
import mongoose from "mongoose";
const app = express();
mongoose.connect(process.env.URL_DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
app.use('/files', express.static(path.join(__dirname, '..', 'uploads')));
app.use(express.json({ strict: true }));

app.use(routes);

export default app;
