import { EType, Element, Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import { AdventureMeta, WorldMeta } from "./meta";

export default class Adventure extends Element {
  id: number;
  world: WorldMeta;
  graph: Graph;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];

  constructor(title: string, description: string, id: number, world: WorldMeta) {
    super(EType.ADVENTURE, title, description);
    this.id = id;
    this.title = title;
    this.world = world;
    this.graph = new Graph();
  }

  

  static key(adventure: Adventure): string {
    return `${adventure.title.toLowerCase().replace(/\s/g, "_")}_adventure_${adventure.id}`;
  }

  static meta(adventure: Adventure): AdventureMeta {
    return new AdventureMeta(adventure);
  }
}