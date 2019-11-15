import { Area, Character, Item } from "./index";

export default class Setting {
  title: string;
  description: string;
  areas: Area[]
  characters: Character[];
  items: Item[];

  constructor(
    title: string = "New Setting",
    description: string = "This is the Setting of the Adventure",
    areas: Area[] = [],
    characters: Character[] = [],
    items: Item[] = []
  ) {
    this.title = title;
    this.description = description;
    this.areas = areas;
    this.characters = characters;
    this.items = items;
  }
}