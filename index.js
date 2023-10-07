import express from "express";
import { get_data } from "./utils/data.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
    return res.send("Hello World!");
});

app.get("/borrow_data", (req, res) => {
    return res.json(get_data());
});

app.listen(PORT, () => {
    console.log(`App is alive at http://localhost:${PORT}`);
});
