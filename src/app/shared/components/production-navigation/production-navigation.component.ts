import { Component, Input, OnInit } from '@angular/core';
import { IProductionStationNode } from '../../interfaces/production-station.interface';
@Component({
  selector: 'production-navigation',
  templateUrl: './production-navigation.component.html',
  styleUrls: ['./production-navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigation: IProductionStationNode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
