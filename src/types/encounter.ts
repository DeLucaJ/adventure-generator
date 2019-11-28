import { Area, Character, NarrativeElement } from '@/types';

export default class Encounter extends NarrativeElement{
  area: Area;
  characters: Character[];

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