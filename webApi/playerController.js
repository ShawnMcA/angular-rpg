const fs  = require('fs');
const router = require('express').Router();

let playerData;
let playerInventory;
let playerAttacks;
let items;

/*
 *  Player Data
 */ 
router.get('/playerData', function(req, res) {
  playerData = JSON.parse(fs.readFileSync('./dataStorage/playerData.json'));
  res.send(playerData);
});

/*
 *  Player Inventory
 */ 
router.get('/playerInventory', function(req, res) {
  let inventoryDto = [];

  playerInventory = JSON.parse(fs.readFileSync('./dataStorage/playerInventory.json'));
  items = JSON.parse(fs.readFileSync('./dataStorage/items.json'));

  playerInventory.forEach(item => {
    items.forEach(i => {
      if(item.fkItemId === i.pkItemId) inventoryDto.push(i);
    })
  });

  res.send(inventoryDto);
});

/*
 *  Player Attacks
 */ 
router.get('/playerAttacks', function(req, res) {
  playerAttacks = JSON.parse(fs.readFileSync('./dataStorage/playerAttacks.json'));
  res.send(playerAttacks);
});

module.exports = router;