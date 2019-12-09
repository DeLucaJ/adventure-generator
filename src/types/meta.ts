import { Adventure, World } from "@/types";

export class AdventureMeta {
  title: string;
  world_title: string;
  key: string;
  world_key: string;
  created: Date;
  edited: Date;

  constructor(adventure: Adventure) {
    this.title = adventure.title;
    this.world_title = adventure.world.title;
    this.key = Adventure.key(adventure);
    this.world_key = adventure.world.key;
    this.created = adventure.created;
    this.edited = adventure.lastEdited;
  }
}

export class WorldMeta {
  title: string;
  key: string;
  created: Date;
  edited: Date;

  constructor(world: World) {
    this.title = world.title;
    this.key = World.key(world);
    this.created = world.created;
    this.edited = world.lastEdited;
  }
}