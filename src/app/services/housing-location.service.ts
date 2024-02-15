import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housing-location.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HousingLocationService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async deleteLocationById(id: number) {
    return this.http.delete<HousingLocation[]>(`${this.url}/${id}`);
  }
}
