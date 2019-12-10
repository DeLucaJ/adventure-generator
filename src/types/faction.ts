import { EType, Actor } from "@/types";
import { default as Meta, FactionMeta, WorldMeta } from "./meta";

export default class Faction extends Actor {
  constructor(
    title: string = "New Faction",
    description: string = "This is an organization at work in the Setting.",
    world: WorldMeta
  ) {
    super(EType.FACTION, title, description, Meta.newFaction(), world);
  }
  
  static key(faction: Faction): string {
    return `_faction_${faction.id}`;
  }

  static meta(faction: Faction): FactionMeta {
    return new FactionMeta(faction);
  }
}