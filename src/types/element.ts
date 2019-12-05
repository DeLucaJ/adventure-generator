import World from "./world";
import Adventure from "./adventure";
import Dated from "./dated";

export abstract class Element extends Dated {
  private _etype: EType;
  title: string;
  description: string;

  constructor(etype: EType, title: string, description: string) {
    super();
    this._etype = etype;
    this.title = title;
    this.description = description;
  }

  get type(): EType {
    return this._etype;
  }
}

export abstract class WorldElement extends Element {
  world: World;

  constructor(etype: EType, title: string, description: string, world: World) {
    super(etype, title, description);
    this.world = world;
  }
}

export abstract class AdventureElement extends Element {
  adventure: Adventure;
  
  constructor(etype: EType, title: string, description: string, adventure: Adventure) {
    super(etype, title, description);
    this.adventure = adventure;
  }
}

export enum EType {
  NONE,
  ADVENTURE,
  AREA,
  CHAPTER,
  CHARACTER,
  ENCOUNTER,
  EXTRA,
  FACTION,
  ITEM,
  EVENT,
  WORLD
}