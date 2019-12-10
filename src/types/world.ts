import { EType, Element, Relation, Character, Extra, Faction, Area, Item } from "@/types";
import { default as Meta, WorldMeta } from "./meta";

export default class World extends Element {
  relations: Relation[] = [];
  characters: Character[] = [];
  extras: Extra[] = [];
  factions: Faction[] = [];
  areas: Area[] = [];
  items: Item[] = [];
  
  constructor(title: string, description: string) {
    super(EType.WORLD, title, description, Meta.newWorld());
  }

  static key(world: World): string {
    return `_world_${world.id}`;
  }

  static meta(world: World): WorldMeta {
    return new WorldMeta(world);
  }
}