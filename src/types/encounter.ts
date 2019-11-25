import { Area, Character, AdventureElement } from '@/types';

export default class Encounter extends AdventureElement{
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
    super(title, description);
    this.area = area;
    this.characters = characters;
  }
}