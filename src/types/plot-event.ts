import { AdventureElement, Encounter } from '@/types';
import Adventure from "./adventure";

export default class PlotEvent extends AdventureElement {
  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an Encounter.",
    adventure: Adventure
  ) {
    super(title, description, adventure);
  }
}