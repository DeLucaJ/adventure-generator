import { NarrativeElement, Encounter } from '@/types';

export default class PlotEvent extends NarrativeElement {
  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an Encounter."
  ) {
    super(title, description);
  }
}