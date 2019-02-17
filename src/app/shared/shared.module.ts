import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { NgxListLibModule } from '@binnovative/ngx-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, NgxListLibModule],
  exports: [MatButtonModule, NgxListLibModule]
})
export class SharedModule {}
