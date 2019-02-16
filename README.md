# Ngx List

A simple material select list that uses NGXS.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
