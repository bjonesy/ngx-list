import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material';

import { Store } from '@ngxs/store';

import {
  SelectListItem
} from '../../state/selection-list/actions/select-list-item';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  defaultTheme: boolean;
  checkboxTheme?: boolean;

  @Input() theme?: string;
  @Input() listItems: Array<any>;

  @Output() readonly selectionChange = new EventEmitter<void>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.activateTheme(this.theme);
  }

  activateTheme(theme: string): void {
    theme === 'checkbox' ? (this.checkboxTheme = true) : (this.defaultTheme = true);
  }

  onGroupsChange(options: Array<MatListOption>): void {
    this.store.dispatch(new SelectListItem(options.map(o => o.value)));
    this.selectionChange.emit();
  }
}
