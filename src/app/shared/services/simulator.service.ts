import { Injectable } from '@angular/core';
import { ISection } from '../interfaces/section.interface';
import { ISectionStatus } from '../enums/section-status.enum';

@Injectable({ providedIn: 'root' })
export class SimulatorService {
  public productionLine: ISection[] = [];
  public simulatorRun: boolean = false;
  private loop: number = 2; // Seconds

  public switchSimulator() {
    this.simulatorRun = !this.simulatorRun;
    this.simulation();
  }

  private simulation() {
    if (this.simulatorRun) {
      setTimeout(() => {

        let randomSection = this.getRandomInt(this.productionLine.length);
        let randomStatus = this.getRandomInt(3);
        this.productionLine[randomSection].status = randomStatus === 0 ? ISectionStatus.Alarm : randomStatus === 1 ? ISectionStatus.Warning : ISectionStatus.Alarm;

        this.simulation();
      }, this.loop * 1000);
    }
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}