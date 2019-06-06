import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface User {
  firstname: string;
  lastname: string;
}

const USER_ELEMENT_DATA: User[] = [
  {firstname: 'Peter', lastname: 'Behner'},
  {firstname: 'Klaus', lastname: 'Meier'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['firstname', 'lastname'];
  // dataSource = ELEMENT_DATA;
  dataSource: User[] = USER_ELEMENT_DATA;
  theDataSource$: Observable<User[]>;
  userSubscription: Subscription;
  error: string;

  constructor(private http: HttpClient) {
    this.theDataSource$ = this.http.get<User[]>('/users');
  }

  ngOnInit() {
    this.userSubscription = this.theDataSource$
      .subscribe(
        data => this.dataSource = data,
        (err: HttpErrorResponse) => {
          this.error = `Can not get users. Got ${err.message}`;
          console.log(this.error);
        }
      );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
