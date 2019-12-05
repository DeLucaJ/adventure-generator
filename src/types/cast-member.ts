import { EType, WorldElement } from "@/types";
import World from "./world";

export default class CastMember extends WorldElement {
  traits: string[] = [];
  ideals: string[] = [];
  flaws: string[] = [];

  constructor(etype: EType, title: string, description: string, world: World) {
    super(etype, title, description, world);
  }
}