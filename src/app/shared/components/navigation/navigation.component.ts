import { ISection } from '../../interfaces/section.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigation: ISection[] = [];

  constructor() { }
  public ngOnInit(): void { }
}
