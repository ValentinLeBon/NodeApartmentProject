const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const createRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/immo", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.catch((error) => console.error(error));

createRoutes(app);

app.listen(3000, () => {
    console.log("Server is working");
});
