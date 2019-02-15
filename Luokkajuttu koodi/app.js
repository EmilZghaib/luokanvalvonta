

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api.yaml');

app.use('/api.docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);