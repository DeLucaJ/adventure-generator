import { Encounter } from "./index";

export default class PlotPoint {
  title: string;
  encounter: Encounter;

  constructor(
    title: string = "",
    encounter: Encounter = new Encounter(),
  ) {
    this.title = title;
    this.encounter = encounter;
  }
}