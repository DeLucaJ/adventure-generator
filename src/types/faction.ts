import { Character, AdventureElement } from '@/types';

export default class Faction extends AdventureElement {
  members: Character[];
  ideals: string[] = [];
  bonds: string[] = [];
  flaws: string[] = [];
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = [];

  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    members: Character[] = []
  ) {
    super(title, description);
    this.members = members;
  }
}