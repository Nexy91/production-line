import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppService {
  public showHeader: boolean = false;
  public showFooter: boolean = false;

  public switchHeaderFooter(x: boolean) {
    this.showHeader = x;
    this.showFooter = x;
  }
}