import { Component } from '@angular/core';
import { EhisService } from './services/ehis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'free-io';

  constructor ( public ehisService: EhisService)
  {}
}
