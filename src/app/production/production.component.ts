import { Component, OnInit } from '@angular/core';
import { IProductionStationStatus } from '../shared/enums/production-station-status.enum';
import { IProductionStationNode } from '../shared/interfaces/production-station.interface';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  public productionLine: IProductionStationNode[] = [
    {
      title: 'scale',
      icon: 'alarm',
      status: IProductionStationStatus.Ok
    },
    {
      title: 'attacher',
      icon: 'alarm',
      status: IProductionStationStatus.Error
    },
    {
      title: 'packer',
      icon: 'alarm',
      status: IProductionStationStatus.Ok
    },
    {
      title: 'closer',
      icon: 'alarm',
      status: IProductionStationStatus.Warning
    }
  ];

  constructor(private _app: AppService) { }

  ngOnInit(): void {
    this._app.switchHeaderFooter(true);
  }

}
