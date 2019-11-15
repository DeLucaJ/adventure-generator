import { Area, Character } from '.';

export default class Encounter {
  title: string;
  description: string;
  area: Area;
  characters: Character[];
  // type: EncounterType;
  // goons: Goon[];

  constructor(
    title: string = "New Encounter",
    description: string = "This is an encounter that takes place in the Narrative.",
    area: Area = new Area(),
    characters: Character[] = [] 
  ) {
    this.title = title;
    this.description = description;
    this.area = area;
    this.characters = characters;
  }
}