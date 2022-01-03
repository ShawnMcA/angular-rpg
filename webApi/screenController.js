const fs  = require('fs');
const router = require('express').Router();

let screenData;

/*
 *  Player Data
 */ 
router.get('/', function(req, res) {
  screenData = JSON.parse(fs.readFileSync('./dataStorage/rpgScreens.json'));
  res.send(screenData);
});


module.exports = router;