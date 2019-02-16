import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SelectionListState } from '@bi/ngx-list';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxsModule.forRoot([SelectionListState])]
})
export class CoreModule {}
