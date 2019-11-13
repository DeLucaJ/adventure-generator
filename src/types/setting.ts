import { Area, Character, Item } from "./index";

export default class Setting {
  title: string;
  areas: Area[]
  characters: Character[];
  items: Item[];

  constructor(
    title: string = "",
    areas: Area[] = [],
    characters: Character[] = [],
    items: Item[] = []
  ) {
    this.title = title;
    this.areas = areas;
    this.characters = characters;
    this.items = items;
  }
}