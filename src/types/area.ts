import { AdventureElement } from '@/types';

export default class Area extends AdventureElement{
  subAreas: Area[] = [];
  // type: AreaType;
  // map: AreaMap;

  constructor(
    title: string = "New Area",
    description: string = "This is a location that can be travelled to in the Setting",
    subAreas: Area[] = []
  ) {
    super(title, description);
    this.subAreas = subAreas;
  }
}