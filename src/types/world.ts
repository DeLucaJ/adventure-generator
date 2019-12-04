import { Dated, Relation, Character, Extra, Faction, Area, Item } from "@/types";
import { WorldMeta } from "./meta";

export default class World extends Dated {
  title: string;
  id: number;
  relations: Relation[] = [];
  characters: Character[] = [];
  extras: Extra[] = [];
  factions: Faction[] = [];
  areas: Area[] = [];
  items: Item[] = [];
  
  constructor(title: string = "New World", id: number) {
    super();
    this.id = id;
    this.title = title;
  }

  get key(): string {
    return `${this.title.toLowerCase().replace(/\s/, "_")}_world_${this.id}`;
  }

  get meta(): WorldMeta {
    return new WorldMeta(this);
  }
}