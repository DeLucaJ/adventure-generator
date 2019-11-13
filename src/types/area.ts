export default class Area {
  title: string;
  description: string = "";
  subAreas: Area[] = [];
  // type: AreaType;
  // map: AreaMap;

  constructor(
    title: string = "",
    description: string = "",
    subAreas: Area[] = []
  ) {
    this.title = title,
    this.description = description;
    this.subAreas = subAreas;
  }
}