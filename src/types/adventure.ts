import * as Graph from '../generators/graph'
import * as Types from './index';

export default class Adventure {
  narrative: Types.Narrative;
  setting: Types.Setting;

  constructor() {
    this.narrative = { }
    this.setting = { }
  }
}