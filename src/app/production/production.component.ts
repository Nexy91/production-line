import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  constructor(private _app: AppService) { }

  ngOnInit(): void {
    this._app.switchHeaderFooter(true);
  }

}
