const fs  = require('fs');
const router = require('express').Router();

let enemyData;

/*
 *  Enemies by ID
 */ 
router.get('/:id', function(req, res) {
  let enemy;

  enemyData = JSON.parse(fs.readFileSync('./dataStorage/enemies.json'));

  enemy = enemyData.filter(e => e.pkEnemyId === +req.params.id);

  res.send(enemy);
});

module.exports = router;