import { EType, WorldElement } from '@/types';
import { default as Meta, ItemMeta, WorldMeta } from "./meta";

export default class Item extends WorldElement {
  constructor(
    title: string = "New Item",
    description: string = "This is a unique item or type of item in the Setting",
    world: WorldMeta
  ) {
    super(EType.ITEM, title, description, Meta.newItem(), world);
  }

  static key(item: Item): string {
    return `_item_${item.id}`;
  }

  static meta(item: Item): ItemMeta {
    return new ItemMeta(item);
  }
}