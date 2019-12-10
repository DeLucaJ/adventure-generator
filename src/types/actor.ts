import { EType, CastMember } from "@/types";
import { WorldMeta } from "./meta";

export default class Actor extends CastMember {
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = [];
  
  constructor(etype: EType, title: string, description: string, id: number, world: WorldMeta) {
    super(etype, title, description, id, world);
  }
}