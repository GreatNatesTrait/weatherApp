import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http :HttpClient) { }

  getWeather(lon:string, lat:string) : Promise<any>{
    return this.http.get(`https://api.weather.gov/points/${lon},${lat}`).toPromise().then((response:any) => {
      var data = response?.properties.forecast
   return data;
   //return response
})

  }
}
