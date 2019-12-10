import { EType, Actor } from '@/types';
import { default as Meta, WorldMeta, CharacterMeta } from "./meta";

export default class Character extends Actor {
  mannerisms: string[] = [];

  constructor(
    title: string = "New Character",
    description: string = "This is a character that appears in the Setting. Will have more nuances in the future.",
    world: WorldMeta
  ) {
    super(EType.CHARACTER, title, description, Meta.newCharacter(), world);
  }

  static key(character: Character): string {
    return `_character_${character.id}`;
  }

  static meta(character: Character): CharacterMeta {
    return new CharacterMeta(character);
  }
}