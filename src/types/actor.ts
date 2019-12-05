import { EType, CastMember } from "@/types";
import World from "./world";

export default class Actor extends CastMember {
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = [];
  
  constructor(etype: EType, title: string, description: string, world: World) {
    super(etype, title, description, world);
  }
}