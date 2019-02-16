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
    { getState, setState }: StateContext<Array<any>>,
    { payload }
  ): Observable<any> {
    return setState([...getState(), payload]);
  }
}
