import { Element, Narrative, Setting} from './index';

export default class Adventure extends Element{
  narrative: Narrative;
  setting: Setting;

  constructor(
    title: string = "New Adventure", 
    description: string = "This is your Adventure",
    narrative: Narrative = new Narrative(),
    setting: Setting = new Setting()
  ) {
    super(title, description);
    this.narrative = narrative;
    this.setting = setting;
  }
}