import { EType, Element, Relation, Character, Extra, Faction, Area, Item } from "@/types";
import { WorldMeta } from "./meta";

export default class World extends Element {
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
    return `${world.title.toLowerCase().replace(/\s/g, "_")}_world_${world.id}`;
  }

  static meta(world: World): WorldMeta {
    return new WorldMeta(world);
  }
}