import { Observable } from 'rxjs';

import { Action, State, StateContext } from '@ngxs/store';

import { SelectListItem } from './actions/select-list-item';

@State<Array<any>>({
  name: 'selectionList',
  defaults: []
})
export class SelectionListState {
  constructor() {}

  @Action(SelectListItem) selectListItem(
    { setState }: StateContext<Array<any>>,
    action: SelectListItem
  ): Observable<any> {
    return setState([action.payload]);
  }
}
