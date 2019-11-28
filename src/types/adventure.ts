import { Dated, Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import World from "./world";
import { AdventureMeta } from "./meta";

export default class Adventure extends Dated {
  title: string;
  id: number;
  world: World;
  graph: Graph;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];

  constructor(title: string = "New Adventure", id: number, world: World) {
    super();
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