import { EType, CastMember } from "@/types";
import { WorldMeta } from "./meta";

export default class Extra extends CastMember {
  constructor(title: string, description: string, world: WorldMeta) {
    super(EType.EXTRA, title, description, world);
  }
}