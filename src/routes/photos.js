const { Hono } = require("hono");

const app = new Hono();

app.get("/", (c) => {
  return c.text("Some photos");
});



module.exports = app;
