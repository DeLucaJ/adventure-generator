export default class Character {
  title: string;
  description: string;
  /* traits: string[];
  ideals: string[];
  bonds: string[];
  flaws: string[];
  secrets: string[];
  mannerisms: string[];
  goals: string[];
  motivations: string[] */

  constructor(
    title: string = "",
    description: string = ""
  ) {
    this.title = title;
    this.description = description;
  }
}