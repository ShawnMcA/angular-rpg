const EnemyController = require('./enemyController');
const ItemController = require('./itemController');
const PlayerController = require('./playerController');
const ScreenController = require('./screenController');

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const server = app.listen(process.env.PORT || 3000, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});

app.use('/api/enemy', EnemyController);
app.use('/api/item', ItemController);
app.use('/api/player', PlayerController);
app.use('/api/screens', ScreenController);