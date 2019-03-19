

const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./api.yaml');
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.post('/areas/:area/presence', (request, response) => {
    console.log('area;', request.params.area);
    console.log('content:', request.body);


    if(!request.body.tags) {
        response.status(400).send({error: ""

        })
    }
    
    
    
    //tarkista pyyntö
    // - onko area laillinen: oikea muoto
    // - onko tag-lista olemassa
    //jos ei oikein, palauta 400 ja virheteksti

    // kirjoita tiedot tietokantaa
    // jos kirjoitus epäonnistuu, palauta 500


    response.status(201).send();
});
console.log(`Listening to port ${port}`);
app.listen(port);