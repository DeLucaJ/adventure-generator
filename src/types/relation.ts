import { WorldElementMeta } from "@/types";

export default class Relation {
  type: string;
  source: WorldElementMeta;
  target: WorldElementMeta;

  constructor(type: string, source: WorldElementMeta, target: WorldElementMeta) {
    this.source = source;
    this.type = type;
    this.target = target;
  }
}

