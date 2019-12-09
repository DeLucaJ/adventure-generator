import { EType, Element, Relation, Character, Extra, Faction, Area, Item } from "@/types";
import { WorldMeta } from "./meta";

export default class World extends Element {
  /* static nextID: number = 0;

  static createWorld(): World {
    return new World(`New World ${++this.nextID}`, this.nextID);
  }

  static get meta(): WorldGenMeta {
    return new WorldGenMeta(this.nextID);
  }

  static set meta(meta: WorldGenMeta) {
    this.nextID = meta.nextID;
  } */

  id: number;
  relations: Relation[] = [];
  characters: Character[] = [];
  extras: Extra[] = [];
  factions: Faction[] = [];
  areas: Area[] = [];
  items: Item[] = [];
  
  constructor(title: string, description: string, id: number) {
    super(EType.WORLD, title, description);
    this.id = id;
    this.title = title;
  }

  static key(world: World): string {
    return `${world.title.toLowerCase().replace(/\s/, "_")}_world_${world.id}`;
  }

  static meta(world: World): WorldMeta {
    return new WorldMeta(world);
  }
}

/* export class WorldGenMeta {
  nextID: number;
  
  constructor(nextID: number) {
    this.nextID = nextID;
  }
} */