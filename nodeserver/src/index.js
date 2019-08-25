// Require external modules
require("dotenv").config();
const routes = require("./routes");
const mongoose = require("mongoose");
const swagger = require("./config/swagger");
const fastify = require("fastify")({
  logger: true
});

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

fastify.register(require("fastify-cors"), {
  origin: true,
  methods: "GET,POST"
});

// Declare a ping route
fastify.get("/ping", async (request, reply) => {
  return { ping: "pong" };
});

// Declare routes
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080, "0.0.0.0");
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

mongoose
  .connect(process.env.DB_CONN, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected…"))
  .catch(err => console.error(err));
