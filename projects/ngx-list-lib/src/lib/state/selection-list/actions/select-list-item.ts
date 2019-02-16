export class SelectListItem {
  static readonly type = '[SELECT] Slect List Item';
  constructor(public readonly payload: Array<any>) {}
}
