import { EType, AdventureElement, Encounter } from "@/types";
import { default as Meta, ChapterMeta, EncounterMeta, AdventureMeta } from "./meta";
import { Graph } from "@/generators";

export default class Chapter extends AdventureElement {
  graph: Graph;
  encounters: EncounterMeta[];
  objectives: string[]

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    adventure: AdventureMeta,
    graph: Graph = new Graph(),
    encounters: EncounterMeta[] = [],
    objectives: string[] = []
  ) {
    super(EType.CHAPTER, title, description, Meta.newChapter(), adventure);
    this.graph = graph;
    this.encounters = encounters;
    this.objectives = objectives;
  }

  static key(chapter: Chapter): string {
    return `_chapter_${chapter.id}`;
  }

  static meta(chapter: Chapter): ChapterMeta {
    return new ChapterMeta(chapter);
  }
}