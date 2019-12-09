import { EType, Actor } from '@/types';
import { WorldMeta } from "./meta";

export default class Character extends Actor {
  mannerisms: string[] = [];

  constructor(
    title: string = "New Character",
    description: string = "This is a character that appears in the Setting. Will have more nuances in the future.",
    world: WorldMeta
  ) {
    super(EType.CHARACTER, title, description, world);
  }
}