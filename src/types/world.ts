import { Relation, Character, Extra, Faction, Area, Item } from "@/types";

export default class World {
  title: string;
  relations: Relation[] = [];
  characters: Character[] = [];
  extras: Extra[] = [];
  factions: Faction[] = [];
  areas: Area[] = [];
  items: Item[] = [];

  constructor(title: string = "New World") {
    this.title = title;
  }
}