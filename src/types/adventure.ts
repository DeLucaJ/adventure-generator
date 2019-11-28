import {
  Relation,
  Narrative,
  Chapter,
  Encounter,
  PlotEvent,
  Character,
  Extra,
  Faction,
  Area,
  Item
} from './index';

export default class Adventure {
  title: string;
  narrative: Narrative;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];
  characters: Character[] = [];
  extras: Extra[] = [];
  factions: Faction[] = [];
  areas: Area[] = [];
  items: Item[] = [];
  relations: Relation[] = [];

  constructor(
    title: string = "New Adventure"
  ) {
    this.title = title;
    this.narrative = new Narrative("new Narrative", "new Narrative");
  }
}