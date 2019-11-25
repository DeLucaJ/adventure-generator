import { Element, Encounter } from '@/types';

export default class PlotPoint extends Element {
  encounter: Encounter;

  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an Encounter.",
    encounter: Encounter = new Encounter(),
  ) {
    super(title, description);
    this.encounter = encounter;
  }
}