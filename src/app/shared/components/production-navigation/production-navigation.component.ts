import { ISection } from '../../interfaces/section.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'production-navigation',
  templateUrl: './production-navigation.component.html',
  styleUrls: ['./production-navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigation: ISection[] = [];

  constructor() { }
  public ngOnInit(): void { }
}
