import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { SelectionListState } from '@bi/ngx-list';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  newArray: Array<any>;

  @ViewChild('newListParent') newListParent: ElementRef;
  @ViewChild('newList') newList: ElementRef;

  @Select(SelectionListState) listItems$: Observable<Array<any>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe(o => {
      this.newArray = o.selectionList;
    });
  }
}
