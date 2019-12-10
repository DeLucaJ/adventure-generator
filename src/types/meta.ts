import {
  Element,
  Adventure,
  World,
  Area, 
  CastMember,
  Character, 
  Extra, 
  Faction, 
  Item, 
  Encounter, 
  PlotEvent, 
  Chapter,
  EType
} from "@/types";

export default class Meta {
  nextAdventure: number = 0;
  nextWorld: number = 0;
  nextArea: number = 0;
  nextCharacter: number = 0;
  nextExtra: number = 0;
  nextFaction: number = 0;
  nextItem: number = 0;
  nextEncounter: number = 0;
  nextPlotEvent: number = 0;
  nextChapter: number = 0;
  static instance: Meta;

  constructor(previous: any = undefined) {
    if (previous !== undefined) {
      this.nextAdventure = previous.nextAdventure;
      this.nextWorld = previous.nextWorld;
      this.nextArea = previous.nextArea;
      this.nextCharacter = previous.nextCharacter;
      this.nextExtra = previous.nextExtra;
      this.nextFaction = previous.nextFaction;
      this.nextItem = previous.nextItem;
      this.nextEncounter = previous.nextEncounter;
      this.nextPlotEvent = previous.nextPlotEvent;
      this.nextChapter = previous.nextChapter;
    }
    Meta.instance = this;
  }

  static newAdventure() {
    let n = Meta.instance.nextAdventure++;
    return n;
  }

  static newWorld() {
    let n = Meta.instance.nextWorld++;
    return n;
  }

  static newArea() {
    let n = Meta.instance.nextArea++;
    return n;
  }

  static newCharacter() {
    let n = Meta.instance.nextCharacter++;
    return n;
  }

  static newExtra() {
    let n = Meta.instance.nextExtra++;
    return n;
  }

  static newFaction() {
    let n = Meta.instance.nextFaction++;
    return n;
  }

  static newItem() {
    let n = Meta.instance.nextItem++;
    return n;
  }

  static newEncounter() {
    let n = Meta.instance.nextEncounter++;
    return n;
  }

  static newPlotEvent() {
    let n = Meta.instance.nextPlotEvent++;
    return n;
  }

  static newChapter() {
    let n = Meta.instance.nextChapter++;
    return n;
  }
}

abstract class ElementMeta {
  title: string;
  created: Date;
  edited: Date;

  constructor(element: Element) {
    this.title = element.title;
    this.created = element.created;
    this.edited = element.lastEdited;
  }
}

export abstract class CastMemberMeta extends ElementMeta {
  key: string;
  
  constructor(castMember: CastMember, key: string) {
    super(castMember);
    this.key = key;
  }
}

export class AdventureMeta extends ElementMeta{
  world_title: string;
  key: string;
  world_key: string;

  constructor(adventure: Adventure) {
    super(adventure);
    this.world_title = adventure.world.title;
    this.key = Adventure.key(adventure);
    this.world_key = adventure.world.key;
  }
}

export class WorldMeta extends ElementMeta {
  key: string;

  constructor(world: World) {
    super(world);
    this.key = World.key(world);
  }
}

export class AreaMeta extends ElementMeta {
  key: string;

  constructor(area: Area) {
    super(area);
    this.key = Area.key(area);
  }  
}
export class CharacterMeta extends CastMemberMeta {

  constructor(character: Character) {
    super(character, Character.key(character));
  }  
}

export class ExtraMeta extends CastMemberMeta {

  constructor(extra: Extra) {
    super(extra, Extra.key(extra));
  }  
}

export class FactionMeta extends CastMemberMeta {

  constructor(faction: Faction) {
    super(faction, Faction.key(faction));
  }  
}

export class ItemMeta extends ElementMeta {
  key: string;

  constructor(item: Item) {
    super(item);
    this.key = Item.key(item);
  }  
}

export class EncounterMeta extends ElementMeta {
  key: string;

  constructor(encounter: Encounter) {
    super(encounter);
    this.key = Encounter.key(encounter);
  }  
}

export class PlotEventMeta extends ElementMeta {
  key: string;

  constructor(plotevent: PlotEvent) {
    super(plotevent);
    this.key = PlotEvent.key(plotevent);
  }  
}

export class ChapterMeta extends ElementMeta {
  key: string;

  constructor(chapter: Chapter) {
    super(chapter)
    this.key = Chapter.key(chapter);
  }  
}