import { EType, Area, CastMember, AdventureElement } from '@/types';
import Adventure from "./adventure";

export default class Encounter extends AdventureElement {
  area: Area;
  cast: CastMember[];
  objectives: string[];
  events: EncounterEvent[];
  // goals - one sentence that exemplifies the goal of the adventure
  //  -> "get the gold" or "kill the wumpus"
  // encounter events - a list of things that happen during the encoutner
  //  -> each has a condition, a certain circumstance or round that triggers
  //  -> each has an event, something that changes the encounter

  constructor(
    title: string = "New Encounter",
    description: string = "This is an encounter that takes place in the Narrative.",
    adventure: Adventure,
    area: Area,
    cast: CastMember[] = [],
    objectives: string[] = [],
    events: EncounterEvent[] = []
  ) {
    super(EType.ENCOUNTER, title, description, adventure);
    this.area = area;
    this.cast = cast;
    this.objectives = objectives;
    this.events = events;
  }
}

export class EncounterEvent {
  static eventId: number = 0
  condition: string;
  event: string;
  id: number;

  constructor(condition: string, event: string) {
    this.condition = condition;
    this.event = event;
    this.id = EncounterEvent.eventId;
    EncounterEvent.eventId += 1;
  }
}