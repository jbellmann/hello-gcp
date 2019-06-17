import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
