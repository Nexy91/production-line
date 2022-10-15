import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(public _app: AppService) { }
  public ngOnInit(): void { }
}
