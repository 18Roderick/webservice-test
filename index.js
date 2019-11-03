const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_FILES = path.join(__dirname, 'public');
const VIEWS = path.join(__dirname, 'views');

app.set('views', VIEWS);
app.set('view engine', 'pug');

app.use('/public', express.static(PUBLIC_FILES));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
