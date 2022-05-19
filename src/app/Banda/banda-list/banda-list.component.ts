import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = [];
  promedio: number = 0;
  selected: Boolean = false;
  selectedBanda!: Banda;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe(bandas => {
      this.bandas = bandas;
      this.promedio = this.getPromedio(this.bandas);
    });
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  getPromedio(Banda: Banda[]): number {
    let avgMembers: number = 0;
    this.bandas.forEach((banda) => {
      avgMembers = avgMembers + banda.numberOfMembers;
    });
    return Math.round(avgMembers / this.bandas.length);
  }

  ngOnInit() {
    this.getBandas();
  }

}
