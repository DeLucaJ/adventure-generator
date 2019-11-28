import { WorldElement } from '@/types';
import World from "./world";

export default class Area extends WorldElement{
  // type: AreaType;
  // map: AreaMap;

  constructor(
    title: string = "New Area",
    description: string = "This is a location that can be travelled to in the Setting",
    world: World
  ) {
    super(title, description, world);
  }
}