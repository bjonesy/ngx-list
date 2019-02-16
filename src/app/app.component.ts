import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SelectionListState } from '@bi/ngx-list';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  newArray: Array<any>;

  @Select(SelectionListState) listItems$: Observable<Array<any>>;

  private readonly dispose = new Subject<void>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store
      .select(SelectionListState)
      .pipe(takeUntil(this.dispose))
      .subscribe(o => {
        this.newArray = o;
      });
  }

  ngOnDestroy(): void {
    this.dispose.next();
    this.dispose.complete();
  }
}
