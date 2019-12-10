import { EType, AdventureElement, Encounter } from '@/types';
import { default as Meta, AdventureMeta, PlotEventMeta } from "./meta";

export default class PlotEvent extends AdventureElement {
  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an PlotEvent.",
    adventure: AdventureMeta
  ) {
    super(EType.EVENT, title, description, Meta.newPlotEvent(), adventure);
  }

  static key(plotevent: PlotEvent): string {
    return `_plotevent_${plotevent.id}`;
  }

  static meta(plotevent: PlotEvent): PlotEventMeta {
    return new PlotEventMeta(plotevent);
  }
}