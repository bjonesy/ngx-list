# Ngx List

A simple material select list that uses NGXS.

## Installation

NGXS is a peer dependency. It must be installed as well. `npm i @ngxs/store`.

`npm i ngx-list`

Include in any module of your choice.

```
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxListLibModule } from '@bi/ngx-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxListLibModule],
  exports: [NgxListLibModule]
})
export class ExampleModule {}
```

Then import the `SelectionListState` into the `NgxsModule.forRoot([SelectionListState])` module.

```
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxListLibModule, SelectionListState } from '@bi/ngx-list';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxListLibModule, NgxsModule.forRoot([SelectionListState])]
})
export class ExampleModule {}
```

### How to use

Pass in an array of list items to the `ngx-list` component and theme to use if desired.

```
<ngx-list theme="theme" [listItems]="listItems"></ngx-list>
```

### Options

<b>Theme:</b> string.

The only avaibale theme is `checkbox`. It displays the list items with a checkbox. Example [https://material.angular.io/components/list/overview#selection-lists]

```
<ngx-list theme="checkbox" [listItems]="listItems"></ngx-list>
```
