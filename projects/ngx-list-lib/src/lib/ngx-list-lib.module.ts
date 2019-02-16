import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatListModule } from '@angular/material';

import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListItemComponent, ListComponent],
  imports: [CommonModule, MatCheckboxModule, MatListModule],
  exports: [ListComponent, ListItemComponent]
})
export class NgxListLibModule {}
