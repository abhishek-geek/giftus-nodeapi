const app = require("./app");
const { PORT } = require("./utils/config");

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`connecting to port ${PORT}...`);
});