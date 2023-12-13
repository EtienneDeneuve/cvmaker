const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ strict: false, limit: "15mb" }));



app.use(function (req, res, next) {
    req.headers["content-type"] = "application/json";
    next();
});

db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 8323;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});


