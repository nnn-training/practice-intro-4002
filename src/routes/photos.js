const { Hono } = require("hono");

const app = new Hono();

app.get("/", (c) => {
  return c.text("Some photos");
});

app.get("/:title", (c) => {
  const { title } = c.req.param();
  return c.text(`Photo: ${title}`);
});

module.exports = app;
