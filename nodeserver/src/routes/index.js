// Import our Controllers
const lakeController = require("../controllers/lakeController");

const routes = [
  {
    method: "GET",
    url: "/api/lakes/:lat/:lng",
    handler: lakeController.getLakes
  },
  {
    method: "GET",
    url: "/api/lakes/:id",
    handler: lakeController.getSingleLake
  },
  {
    method: "POST",
    url: "/api/lakes",
    handler: lakeController.addLake
    // schema: documentation.addLakeSchema
  }
];

module.exports = routes;
