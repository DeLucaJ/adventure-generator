import Dated from "./dated";
import { WorldMeta, AdventureMeta } from './meta';

export abstract class Element extends Dated {
  _etype: EType;
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
  world: WorldMeta;

  constructor(etype: EType, title: string, description: string, world: WorldMeta) {
    super(etype, title, description);
    this.world = world;
  }
}

export abstract class AdventureElement extends Element {
  adventure: AdventureMeta;
  
  constructor(etype: EType, title: string, description: string, adventure: AdventureMeta) {
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