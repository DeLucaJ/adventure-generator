import { Character } from './index';

export default class Faction {
  title: string;
  description: string;
  members: Character[];
  /* goons: Goon[];
  ideals: string[];
  goals: string[];
  motivations: string[]; */

  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    members: Character[] = []
  ) {
    this.title = title;
    this.description = description;
    this.members = members;
  }
}