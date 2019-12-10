import Dated from "./dated";
import { WorldMeta, AdventureMeta, ElementMeta } from './meta';
import { Character, Extra, Faction, Item, Area, Encounter, Chapter, PlotEvent, World, Adventure } from '.';

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

  static key(element: Element): string | null {
    if (element._etype === EType.CHARACTER) {
      return Character.key(element as Character);
    }
    else if (element._etype === EType.EXTRA) {
      return Extra.key(element as Extra);
    }
    else if (element._etype === EType.FACTION) {
      return Faction.key(element as Faction);
    }
    else if (element._etype === EType.ITEM) {
      return Item.key(element as Item);
    }
    else if (element._etype === EType.AREA) {
      return Area.key(element as Area);
    }
    else if (element._etype === EType.ENCOUNTER) {
      return Encounter.key(element as Encounter);
    }
    else if (element._etype === EType.CHAPTER) {
      return Chapter.key(element as Chapter);
    }
    else if (element._etype === EType.EVENT) {
      return PlotEvent.key(element as PlotEvent);
    }
    else if (element._etype === EType.WORLD) {
      return World.key(element as World);
    }
    else if (element._etype === EType.ADVENTURE) {
      return Adventure.key(element as Adventure);
    }
    else {
      return null;
    }
  }

  static meta(element: Element): ElementMeta | null {
    if (element._etype === EType.CHARACTER) {
      return Character.meta(element as Character);
    }
    else if (element._etype === EType.EXTRA) {
      return Extra.meta(element as Extra);
    }
    else if (element._etype === EType.FACTION) {
      return Faction.meta(element as Faction);
    }
    else if (element._etype === EType.ITEM) {
      return Item.meta(element as Item);
    }
    else if (element._etype === EType.AREA) {
      return Area.meta(element as Area);
    }
    else if (element._etype === EType.ENCOUNTER) {
      return Encounter.meta(element as Encounter);
    }
    else if (element._etype === EType.CHAPTER) {
      return Chapter.meta(element as Chapter);
    }
    else if (element._etype === EType.EVENT) {
      return PlotEvent.meta(element as PlotEvent);
    }
    else if (element._etype === EType.WORLD) {
      return World.meta(element as World);
    }
    else if (element._etype === EType.ADVENTURE) {
      return Adventure.meta(element as Adventure);
    }
    else {
      return null;
    }
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