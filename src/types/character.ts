import { AdventureElement } from '@/types';

export default class Character extends AdventureElement {
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
    super(title, description);
  }
}