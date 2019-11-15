export default class Item {
  title: string;
  description: string;

  constructor(
    title: string = "New Item",
    description: string = "This is a unique item or type of item in the Setting"
  ) {
    this.title = title;
    this.description = description;
  }
}