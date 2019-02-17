import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SelectionListState } from '@binnovative/ngx-list';
import { Select, Store } from '@ngxs/store';
import { auth } from 'firebase';

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

  constructor(public afAuth: AngularFireAuth, private readonly store: Store) {}

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

  login(): void {
    // tslint:disable-next-line: no-floating-promises
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): void {
    // tslint:disable-next-line: no-floating-promises
    this.afAuth.auth.signOut();
  }

  submit(): void {
    console.log(this.newArray);
  }
}
