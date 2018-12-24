import { Component, OnInit } from '@angular/core';
import { EhiDescripcion} from '../../interfaces/ehis-descr.interface';
import { ActivatedRoute } from '@angular/router';
import { EhisService } from '../../services/ehis.service';

@Component({
  selector: 'app-item-ehi',
  templateUrl: './item-ehi.component.html',
  styleUrls: ['./item-ehi.component.css']
})

export class ItemEhiComponent implements OnInit {

  ehi: EhiDescripcion;
  listas: any;
  id: string;
  cargando = true;
  constructor( private route: ActivatedRoute,
                public ehiServices: EhisService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.ehiServices.getEhis(parametros['id'])
        .subscribe((ehi: EhiDescripcion) => {
          this.id = parametros['id'];
          this.listas = ehi['lista'];
          this.ehi = ehi;
          this.cargando = false;
        });
      });
  }


}
