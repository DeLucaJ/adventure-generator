import { Area, Character } from '.';

export default class Encounter {
  title: string;
  description: string;
  area: Area;
  characters: Character[];
  // type: EncounterType;
  // goons: Goon[];

  constructor(
    title: string = "",
    description: string = "",
    area: Area = new Area(),
    characters: Character[] = [] 
  ) {
    this.title = title;
    this.description = description;
    this.area = area;
    this.characters = characters;
  }
}