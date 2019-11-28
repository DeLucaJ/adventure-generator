import { WorldElement } from '@/types';
import World from "./world";

export default class Item extends WorldElement {
  constructor(
    title: string = "New Item",
    description: string = "This is a unique item or type of item in the Setting",
    world: World
  ) {
    super(title, description, world);
  }
}