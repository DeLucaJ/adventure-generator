import { Narrative, Setting} from './index';

export default class Adventure {
  title: string;
  narrative: Narrative;
  setting: Setting;

  constructor(
    title: string = "", 
    narrative: Narrative = new Narrative(),
    setting: Setting = new Setting()
  ) {
    this.title = title;
    this.narrative = narrative;
    this.setting = setting;
  }
}