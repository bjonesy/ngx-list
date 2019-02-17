# ngx-list

A list component that can be used to display a list of items or a list of items to be selected.

## Installation

NGXS and Angular Material are a peer dependencies. They must be installed as well. `npm i @angular/material @angular/cdk @angular/animations @ngxs/store`.

`npm i @binnovative/ngx-list`

Include in a shared or core module in your app.

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

Pass in an array of list items to the `ngx-list` component and a theme to use.

```
<ngx-list theme="theme" [listItems]="listItems"></ngx-list>
```

### Options

<b>Theme:</b> string.

The only avaibale theme is `checkbox`. It displays the list items with a checkbox. Example [https://material.angular.io/components/list/overview#selection-lists]

```
<ngx-list theme="checkbox" [listItems]="listItems"></ngx-list>
```
