import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { dataBandas } from './dataBanda';
import { BandaService } from './banda.service';

@Component({
  selector: 'app-Banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  bandas: Array<Banda> = [];
  promedioIntegrantes: number = 0;
  constructor(private bandaService: BandaService) { }
  getBandaList() {
    this.bandaService.getBandas().subscribe(bandas => {
      console.log("bandas", bandas);
      this.bandas = bandas;
      this.calcularPromedio(this.bandas);
    });
  }
  ngOnInit() {
    this.getBandaList();
  }

  calcularPromedio(bandas: Array<Banda>) {
    let sumaIntegrantes: number = 0;
    bandas.forEach(banda => {
      sumaIntegrantes += banda.numberOfMembers;
    });
    this.promedioIntegrantes = sumaIntegrantes / bandas.length;
  }

}
