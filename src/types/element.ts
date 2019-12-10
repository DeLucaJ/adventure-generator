import Dated from "./dated";
import { WorldMeta, AdventureMeta } from './meta';

export abstract class Element extends Dated {
  _etype: EType;
  title: string;
  description: string;
  id: number;

  constructor(etype: EType, title: string, description: string, id: number) {
    super();
    this._etype = etype;
    this.title = title;
    this.description = description;
    this.id = id;
  }

  get type(): EType {
    return this._etype;
  }
}

export abstract class WorldElement extends Element {
  world: WorldMeta;

  constructor(etype: EType, title: string, description: string, id: number, world: WorldMeta) {
    super(etype, title, description, id);
    this.world = world;
  }
}

export abstract class AdventureElement extends Element {
  adventure: AdventureMeta;
  
  constructor(etype: EType, title: string, description: string, id: number, adventure: AdventureMeta) {
    super(etype, title, description, id);
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