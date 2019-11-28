import { CastMember } from "@/types";

export default class Actor extends CastMember {
  constructor(title: string, description: string) {
    super(title, description);
  }
}