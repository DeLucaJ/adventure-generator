import { Element, Area, Character, Item } from "./index";

export default class Setting extends Element {
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
    super(title, description);
    this.areas = areas;
    this.characters = characters;
    this.items = items;
  }
}