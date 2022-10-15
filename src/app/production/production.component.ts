import { SimulatorService } from '../shared/services/simulator.service';
import { ISectionStatus } from '../shared/enums/section-status.enum';
import { ISection } from '../shared/interfaces/section.interface';
import { AppService } from '../shared/services/app.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  public productionLine: ISection[] = [
    {
      title: 'scale',
      section: 'Scale',
      icon: 'system_update_alt',
      status: ISectionStatus.Running
    },
    {
      title: 'attacher',
      section: 'Bag Attach',
      icon: 'chrome_reader_mode',
      status: ISectionStatus.Alarm
    },
    {
      title: 'packer',
      section: 'Packer',
      icon: 'call_to_action',
      status: ISectionStatus.Running
    },
    {
      title: 'closer',
      section: 'Bag Closer',
      icon: 'grid_on',
      status: ISectionStatus.Warning
    }
  ];

  constructor(private _app: AppService, public _simulator: SimulatorService) { }

  public ngOnInit(): void {
    this._app.switchHeaderFooter(true);
    this._simulator.productionLine = this.productionLine;
  }
}
