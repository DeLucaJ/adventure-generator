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
    title: string = "",
    description: string = "",
    members: Character[] = []
  ) {
    this.title = title;
    this.description = description;
    this.members = members;
  }
}