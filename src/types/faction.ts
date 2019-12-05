import { EType, Actor } from "@/types";
import World from "./world";

export default class Faction extends Actor {
  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    world: World
  ) {
    super(EType.FACTION, title, description, world);
  }
}