import { WorldElement } from "@/types";
import World from "./world";

export default class CastMember extends WorldElement {
  traits: string[] = [];
  ideals: string[] = [];
  flaws: string[] = [];

  constructor(title: string, description: string, world: World) {
    super(title, description, world);
  }
}