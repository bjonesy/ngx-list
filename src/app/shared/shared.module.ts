import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxListLibModule } from '@binnovative/ngx-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxListLibModule],
  exports: [NgxListLibModule]
})
export class SharedModule {}
