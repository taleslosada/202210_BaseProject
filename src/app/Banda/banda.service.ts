import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from './banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl: string = "https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/rockbands.json"

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    console.log("url", this.apiUrl);
    return this.http.get<Banda[]>(this.apiUrl);
  }

}
