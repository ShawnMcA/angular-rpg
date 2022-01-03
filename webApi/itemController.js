const fs  = require('fs');
const router = require('express').Router();

let itemData;

/*
 *  Items Equipment
 */ 
router.get('/equipment', function(req, res) {
  itemData = JSON.parse(fs.readFileSync('./dataStorage/items.json'));
  res.send(itemData.filter(item => item.itemType === "equipment"));
});

/*
 *  Items Consumables
 */ 
router.get('/consumable', function(req, res) {
  itemData = JSON.parse(fs.readFileSync('./dataStorage/items.json'));
  res.send(itemData.filter(item => item.itemType === "consumable"));
});

module.exports = router;