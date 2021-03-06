import { EType, WorldElement } from "@/types";
import { WorldMeta }from "./meta";

export default class CastMember extends WorldElement {
  traits: string[] = [];
  ideals: string[] = [];
  flaws: string[] = [];

  constructor(etype: EType, title: string, description: string, id: number, world: WorldMeta) {
    super(etype, title, description, id, world);
  }
}