import { IProductionStationStatus } from '../shared/enums/production-station-status.enum';
import { IProductionStationNode } from '../shared/interfaces/production-station.interface';
import { AppService } from '../shared/services/app.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  public productionLine: IProductionStationNode[] = [
    {
      title: 'scale',
      icon: 'system_update_alt',
      status: IProductionStationStatus.Ok
    },
    {
      title: 'attacher',
      icon: 'chrome_reader_mode',
      status: IProductionStationStatus.Error
    },
    {
      title: 'packer',
      icon: 'call_to_action',
      status: IProductionStationStatus.Ok
    },
    {
      title: 'closer',
      icon: 'grid_on',
      status: IProductionStationStatus.Warning
    }
  ];

  constructor(private _app: AppService) { }

  public ngOnInit(): void {
    this._app.switchHeaderFooter(true);
  }
}
