import { Actor } from '@/types';

export default class Faction extends Actor {
  /* ideals: string[] = [];
  bonds: string[] = [];
  flaws: string[] = [];
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = []; */

  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
  ) {
    super(title, description);
  }
}