import { CastMember } from "@/types";
import World from "./world";

export default class Actor extends CastMember {
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = [];
  
  constructor(title: string, description: string, world: World) {
    super(title, description, world);
  }
}