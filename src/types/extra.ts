import { EType, CastMember } from "@/types";
import { default as Meta, ExtraMeta, WorldMeta } from "./meta";

export default class Extra extends CastMember {
  constructor(title: string, description: string, world: WorldMeta) {
    super(EType.EXTRA, title, description, Meta.newExtra(), world);
  }

  static key(extra: Extra): string {
    return `_extra_${extra.id}`;
  }

  static meta(extra: Extra): ExtraMeta {
    return new ExtraMeta(extra);
  }
}