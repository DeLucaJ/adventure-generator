import { Encounter } from "./index";

export default class PlotPoint {
  title: string;
  description: string;
  encounter: Encounter;

  constructor(
    title: string = "New Plot Point",
    description: string = "This is an event that takes place in the Narrative but outside of Quests. It is represented by an Encounter.",
    encounter: Encounter = new Encounter(),
  ) {
    this.title = title;
    this.description = description;
    this.encounter = encounter;
  }
}