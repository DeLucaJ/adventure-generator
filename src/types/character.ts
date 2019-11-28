import { Actor } from '@/types';
import World from "./world";

export default class Character extends Actor {
  mannerisms: string[] = [];

  constructor(
    title: string = "New Character",
    description: string = "This is a character that appears in the Setting. Will have more nuances in the future.",
    world: World
  ) {
    super(title, description, world);
  }
}