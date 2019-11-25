import { Element } from '@/types';

export default class Item extends Element {
  constructor(
    title: string = "New Item",
    description: string = "This is a unique item or type of item in the Setting"
  ) {
    super(title, description);
  }
}