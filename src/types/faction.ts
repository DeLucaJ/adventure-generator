import { Character, Actor } from '@/types';

export default class Faction extends Actor {
  members: Character[];

  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    members: Character[] = []
  ) {
    super(title, description);
    this.members = members;
  }
}