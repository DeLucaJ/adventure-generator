import { EType, CastMember } from "@/types";
import World from "./world";

export default class Extra extends CastMember {
  constructor(title: string, description: string, world: World) {
    super(EType.EXTRA, title, description, world);
  }
}