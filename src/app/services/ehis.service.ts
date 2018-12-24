import { Injectable } from '@angular/core';
import { EhisInterface } from '../interfaces/ehis.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EhisService {

  cargando = true;
  ehis: EhisInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarEhis();
   }
   private cargarEhis(){
     this.http.get('https://free-io.firebaseio.com/ehis.json')
      .subscribe( (resp: EhisInterface[]) =>{
        this.ehis = resp;
        console.log(resp);
        this.cargando = false;
      });
   }

   getEhis (id: string ){
     return this.http.get(`https://free-io.firebaseio.com/ehis_des/${id}.json`);
   }
}
