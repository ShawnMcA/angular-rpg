import { Consumable } from "./consumable";
import { Equipment } from "./equipment";

export interface PlayerInventory {
  equipment: Equipment[],
  consumables: Consumable[]
}