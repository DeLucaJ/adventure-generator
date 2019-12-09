import { EType, WorldElement } from '@/types';
import { WorldMeta } from "./meta";

export default class Area extends WorldElement{
  // type: AreaType;
  // map: AreaMap;

  constructor(
    title: string = "New Area",
    description: string = "This is a location that can be travelled to in the Setting",
    world: WorldMeta
  ) {
    super(EType.AREA, title, description, world);
  }
}