import { WorldElement } from "@/types";

export default class Relation {
  type: string;
  source: WorldElement;
  target: WorldElement;

  constructor(type: string, source: WorldElement, target: WorldElement) {
    this.source = source;
    this.type = type;
    this.target = target;
  }
}

