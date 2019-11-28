import { Area, Character, AdventureElement } from '@/types';
import Adventure from "./adventure";

export default class Encounter extends AdventureElement{
  area: Area;
  characters: Character[];

  constructor(
    title: string = "New Encounter",
    description: string = "This is an encounter that takes place in the Narrative.",
    adventure: Adventure,
    area: Area,
    characters: Character[] = [] 
  ) {
    super(title, description, adventure);
    this.area = area;
    this.characters = characters;
  }
}