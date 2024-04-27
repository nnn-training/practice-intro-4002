const { Hono } = require("hono");

const app = new Hono();

app.get("/", (c) => {
  return c.text(c.req.path);
});

module.exports = app;
