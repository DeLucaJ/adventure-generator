import { EType, AdventureElement, Encounter } from '@/types';
import { AdventureMeta } from "./meta";

export default class PlotEvent extends AdventureElement {
  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an Encounter.",
    adventure: AdventureMeta
  ) {
    super(EType.EVENT, title, description, adventure);
  }
}