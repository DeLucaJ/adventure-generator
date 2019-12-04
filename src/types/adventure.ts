import { Element, Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import { AdventureMeta, WorldMeta } from "./meta";

export default class Adventure extends Element {
  /* static nextID = 0;

  static get meta(): AdventureGenMeta {
    return new AdventureGenMeta(this.nextID);
  }

  static set meta(meta: AdventureGenMeta) {
    this.nextID = meta.nextID;
  }

  static emptyAdventure(world: World): Adventure {
    return new Adventure(`New Adventure ${++this.nextID}`, this.nextID, world);
  } */
  
  id: number;
  world: WorldMeta;
  graph: Graph;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];

  constructor(title: string, description: string, id: number, world: WorldMeta) {
    super(title, description);
    this.id = id;
    this.title = title;
    this.world = world;
    this.graph = new Graph();
  }

  

  get key(): string {
    return `${this.title.toLowerCase().replace(/\s/, "_")}_adventure_${this.id}`;
  }

  get meta(): AdventureMeta {
    return new AdventureMeta(this);
  }
}
/* 
export class AdventureGenMeta {
  nextID: number;
  
  constructor(nextID: number) {
    this.nextID = nextID;
  }
} */