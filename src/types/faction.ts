import { EType, Actor } from "@/types";
import { WorldMeta } from "./meta";

export default class Faction extends Actor {
  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    world: WorldMeta
  ) {
    super(EType.FACTION, title, description, world);
  }
}