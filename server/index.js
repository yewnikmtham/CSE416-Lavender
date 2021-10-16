const express = require('express');
const app = express();

app.use(express.json());

const db = require("./models");

//Routers
const platformRouter = require("./routes/platform");
app.use("/platforms", platformRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

const quizRouter = require("./routes/quiz");
app.use("/quiz", quizRouter);

const authRouter = require("./routes/auth");
app.use("/authboard", authRouter);

const searchRouter = require("./routes/search");
app.use("/search", searchRouter);


db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
