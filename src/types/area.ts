export default class Area {
  title: string;
  description: string = "";
  subAreas: Area[] = [];
  // type: AreaType;
  // map: AreaMap;

  constructor(
    title: string = "New Area",
    description: string = "This is a location that can be travelled to in the Setting",
    subAreas: Area[] = []
  ) {
    this.title = title,
    this.description = description;
    this.subAreas = subAreas;
  }
}