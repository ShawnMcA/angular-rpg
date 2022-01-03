export interface EnemyData {
  id: number,
  name: string,
  level: number,
  currentHp?: number,
  hp: number,
  mp: number,
  attack: number,
  defense: number,
  magicAttack: number,
  magicDefense: number,
  speed: number
}