import World from "./world";
import Adventure from "./adventure";

export abstract class Element {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

export abstract class WorldElement extends Element {
  world: World;

  constructor(title: string, description: string, world: World) {
    super(title, description);
    this.world = world;
  }
}

export abstract class AdventureElement extends Element {
  adventure: Adventure;
  
  constructor(title: string, description: string, adventure: Adventure) {
    super(title, description);
    this.adventure = adventure;
  }
}