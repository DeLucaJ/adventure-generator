import { EType, Element, Relation, Character, Extra, Faction, Area, Item } from "@/types";
import { default as Meta, WorldMeta, CharacterMeta, ExtraMeta, FactionMeta, AreaMeta, ItemMeta } from "./meta";

export default class World extends Element {
  relations: Relation[] = [];
  characters: CharacterMeta[] = [];
  extras: ExtraMeta[] = [];
  factions: FactionMeta[] = [];
  areas: AreaMeta[] = [];
  items: ItemMeta[] = [];
  
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