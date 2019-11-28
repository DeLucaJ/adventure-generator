import World from "./world";
import Adventure from "./adventure";
import Dated from "./dated";

export abstract class Element extends Dated {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    super();
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