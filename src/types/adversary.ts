import { Character, Faction } from "./index";

export default class Adversary {
  title: string;
  description: string;
  portents: string[];
  factions: Faction[]; // is it one?
  villains: Character[]; // is it one?

  constructor(
    title: string = "",
    description: string = "",
    portent: string[] = [],
    factions: Faction[] = [],
    villains: Character[] = []
  ) {
    this.title = title;
    this.description = description;
    this.portents = portent;
    this.factions = factions;
    this.villains = villains;
  }
}