import { Actor } from '@/types';

export default class Character extends Actor {
  traits: string[] = [];
  mannerisms: string[] = [];

  constructor(
    title: string = "New Character",
    description: string = "This is a character that appears in the Setting. Will have more nuances in the future."
  ) {
    super(title, description);
  }
}