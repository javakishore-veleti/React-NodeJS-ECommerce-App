const swaggerJsdoc = require("swagger-jsdoc"),
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Data Pipelines Express API with Swagger - Master Data",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Data Pipelines",
          url: "http://localhost:3000",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:4000/api/services/masterdata",
        },
      ],
    },
    apis: ["./routes/books.js"],
  };

export function initializeSwagger(app:any) {
    const specs = swaggerJsdoc(swaggerOptions);
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs, { explorer: true }));
}