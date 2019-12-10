import { EType, Element, Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import { default as Meta, AdventureMeta, WorldMeta } from "./meta";

export default class Adventure extends Element {
  world: WorldMeta;
  graph: Graph;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];

  constructor(title: string, description: string, world: WorldMeta) {
    super(EType.ADVENTURE, title, description, Meta.newAdventure());
    this.title = title;
    this.world = world;
    this.graph = new Graph();
  }

  static key(adventure: Adventure): string {
    return `_adventure_${adventure.id}`;
  }

  static meta(adventure: Adventure): AdventureMeta {
    return new AdventureMeta(adventure);
  }
}