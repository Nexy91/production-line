import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppService {
  public showHeader: boolean = false;
  public showFooter: boolean = false;
  public simulatorRun: boolean = false;

  public switchHeaderFooter(x: boolean) {
    this.showHeader = x;
    this.showFooter = x;
  }

  public switchSimulator() {
    this.simulatorRun = !this.simulatorRun;
    if (this.simulatorRun) {
      this.runSimulation();
    }
  }

  private runSimulation() {

  }
}