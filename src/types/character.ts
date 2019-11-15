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
    title: string = "New Character",
    description: string = "This is a character that appears in the Setting. Will have more nuances in the future."
  ) {
    this.title = title;
    this.description = description;
  }
}