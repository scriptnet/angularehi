import { Component, OnInit } from '@angular/core';
import { EhisService } from '../../services/ehis.service';

@Component({
  selector: 'app-ehi',
  templateUrl: './ehi.component.html',
  styleUrls: ['./ehi.component.css']
})
export class EhiComponent implements OnInit {

  constructor( public ehisService: EhisService) { }

  ngOnInit() {
  }

}
