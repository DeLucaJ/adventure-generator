export abstract class Element {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

export abstract class WorldElement extends Element {
  constructor(title: string, description: string) {
    super(title, description);
  }
}

export abstract class NarrativeElement extends Element {
  constructor(title: string, description: string) {
    super(title, description);
  }
}