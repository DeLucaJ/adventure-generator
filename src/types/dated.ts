export default abstract class Dated {
  private _created: Date;
  private _edited: Date;

  constructor() {
    this._created = new Date();
    this._edited = this._created;
  }

  get created() {
    return this._created;
  }

  get lastEdited() {
    return this._edited;
  }

  edited() {
    this._edited = new Date();
  }
}