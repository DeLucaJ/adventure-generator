import { EType, WorldElement } from '@/types';
import { WorldMeta } from "./meta";

export default class Item extends WorldElement {
  constructor(
    title: string = "New Item",
    description: string = "This is a unique item or type of item in the Setting",
    world: WorldMeta
  ) {
    super(EType.ITEM, title, description, world);
  }
}