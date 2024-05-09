const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./routes/db");

const backRouter = require("./routes/back");
const bicepsRouter = require("./routes/biceps");
const chestRouter = require("./routes/chest");
const tricepsRouter = require("./routes/triceps");
const legsRouter = require("./routes/legs");
const coreRouter = require("./routes/core");

// middleware //
app.use(cors());
app.use(express.json());

app.use("/back", backRouter);
app.use("/biceps", bicepsRouter);
app.use("/chest", chestRouter);
app.use("/triceps", tricepsRouter);
app.use("/legs", legsRouter);
app.use("/core", coreRouter);

app.listen(9000, () => {
  console.log("server has started on port 9000");
});
