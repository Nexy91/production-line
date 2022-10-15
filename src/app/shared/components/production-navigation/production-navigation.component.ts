import { IProductionStationNode } from '../../interfaces/production-station.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'production-navigation',
  templateUrl: './production-navigation.component.html',
  styleUrls: ['./production-navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigation: IProductionStationNode[] = [];

  constructor() { }
  public ngOnInit(): void { }
}
