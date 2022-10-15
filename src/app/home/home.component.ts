import { AppService } from '../shared/services/app.service';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from "rxjs/operators";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public countdown$: Observable<number> = new Observable<number>();
  public unsubscribe$ = new Subject();
  public countdown: number = 3;

  constructor(private _router: Router) { }

  public ngOnInit(): void {
    this.countdown$ = interval(1000).pipe(take(this.countdown + 1), map(count => this.countdown - count));
    this.countdown$.pipe(takeUntil(this.unsubscribe$)).subscribe((seconds: number) => {
      if (seconds === 0) {
        this._router.navigate(['production']);
      }
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
