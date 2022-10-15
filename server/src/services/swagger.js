const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NASA Project",
      version: "0.1.0",
      description: "NASA Project APIs Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./routes/planets/planets.router.js"],
};
const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
}