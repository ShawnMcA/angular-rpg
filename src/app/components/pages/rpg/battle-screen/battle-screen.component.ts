import { Component, OnInit } from '@angular/core';
import { EnemyData } from 'src/app/components/shared/interfaces/enemy-data';
import { PlayerAttack } from 'src/app/components/shared/interfaces/player-attack';
import { PlayerData } from 'src/app/components/shared/interfaces/player-data';
import { PlayerInventory } from 'src/app/components/shared/interfaces/player-inventory';
import { EnemyService } from 'src/app/components/shared/services/enemy.service';
import { GameplayService } from 'src/app/components/shared/services/gameplay.service';
import { PlayerService } from 'src/app/components/shared/services/player.service';

@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.scss']
})
export class BattleScreenComponent implements OnInit {

  currentPhase: string = 'player-action-selection';
  playerData!: PlayerData;
  playerAttacks: PlayerAttack[] = [];
  playerInventory: PlayerInventory = {
    equipment:[],
    consumables:[]
  };
  enemyData!: EnemyData;

  constructor(
    private gameplayService: GameplayService, 
    private playerService: PlayerService,
    private enemyService: EnemyService
  ) {

  }

  handleActionSubmit(action: string) {
    switch(action) {
      case 'fight':
        this.currentPhase = 'player-fight-selection';
        break;
      case 'item':
        this.currentPhase = 'player-item-selection';
        break;
      case 'run':
        this.currentPhase = 'player-run-selection';
        break;
    }
  }

  handleFightActionSubmit(action: number) {
    let damage = this.playerAttacks.find(attack => attack.id === action)?.baseDamage;

    if(damage && this.enemyData) {
      this.enemyData.currentHp = this.enemyService.takeDamage(this.enemyData.currentHp!, damage);
    } else {
      console.log("No Damage or enemy provided");
    }

    this.currentPhase = 'player-action-selection';
  }

  handleItemActionSubmit(action: number) {
    switch(action) {
      case 20000:
        this.currentPhase = 'player-action-selection';
        alert('Selecting Item 1');
        break;
      case 20001:
        this.currentPhase = 'player-action-selection';
        alert('Selecting Item 2');
        break;
    }
  }

  handleRunActionSubmit(action: string) {
    switch(action) {
      case 'yes':
        this.currentPhase = 'player-action-selection';
        alert('Player running...');
        break;
      case 'no':
        this.currentPhase = 'player-action-selection';
        break;
    } 
  }

  private _getPlayerData() {
    this.playerService.getPlayerData()
      .subscribe((data: any) => this.playerData = {
        id: data.pkPlayerDataId,
        name: data.playerName,
        exp: data.playerExp,
        level: data.playerLevel,
        currentHp: data.playerHp,
        hp: data.playerHp,
        mp: data.playerMp,
        attack: data.playerAttack,
        defense: data.playerDefense,
        magicAttack: data.playerMagicAttack,
        magicDefense: data.playerMagicDefense,
        speed: data.playerSpeed
      });
  }

  private _getPlayerAttacks() {
    this.playerService.getPlayerAttacks()
      .subscribe((data: any) => {        
        data.forEach((attack: any) => {
          if(this.playerData.level && this.playerData.level >= attack.levelRequired) {
            this.playerAttacks.push({
              id: attack.pkAttackId,
              name: attack.attackName,
              type: attack.attackType,
              mpCost: attack.mpCost,
              baseDamage: attack.baseDamage,
              levelRequired: attack.levelRequired
            });
          }
        });
      });
  }

  private _getPlayerInventory() {
    this.playerService.getPlayerInventory()
      .subscribe((data: any) => {
        data.forEach((item: any) => {
          if(item.itemType === 'equipment') {
            this.playerInventory.equipment.push({
              id: item.pkItemId,
              icon: item.itemIcon,
              type: item.itemType,
              name: item.itemName,
              damage: item.itemDamage,
              value: item.itemValue
            });
          } else if(item.itemType === 'consumable') {
              this.playerInventory.consumables.push({
                id: item.pkItemId,
                icon: item.itemIcon,
                type: item.itemType,
                name: item.itemName,
                effect: item.itemEffect,
                effectValue: item.itemEffectValue,
                value: item.itemValue
              });
          }
        });
      });
  }

  private _getEnemyData(id: number) {
    this.enemyService.getEnemyById(id)
      .subscribe((data: any) => {
        this.enemyData = {
          id: data[0].pkEnemyId,
          name: data[0].enemyName,
          level: data[0].enemyLevel,
          currentHp: data[0].enemyHp,
          hp: data[0].enemyHp,
          mp: data[0].enemyMp,
          attack: data[0].enemyAttack,
          defense: data[0].enemyDefense,
          magicAttack: data[0].enemyMagicAttack,
          magicDefense: data[0].enemyMagicDefense,
          speed: data[0].enemySpeed
        }
      });
  }

  ngOnInit(): void {
    this._getPlayerData();
    this._getEnemyData(1);
  }

  ngAfterViewInit() {
    this._getPlayerAttacks();
    this._getPlayerInventory();
  }
}
