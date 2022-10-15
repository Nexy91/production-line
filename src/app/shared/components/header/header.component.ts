import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public now: Date = new Date();

  constructor(public _app: AppService) {
    setInterval(() => { this.now = new Date(); }, 1);
  }
  public ngOnInit(): void { }
}
