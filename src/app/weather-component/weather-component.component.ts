import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css'],
})
export class WeatherComponentComponent implements OnInit {
  aray: any = [];
  cities = [
    { City: 'Washington DC', Lat: '38.8894', Lon: '-77.0352', id: 'DC' },
    { City: 'NYC', Lat: '40.7128', Lon: '-74.0060', id: 'NYC' },
  ];
  forecastData: any = [];
  cardData: any = [];
  newCities: any = [];
  newCities2: any = [];
  noWrapSlides = false;
  myInterval = 0;
  displayValue="";

  constructor(
    private weatherService: WeatherService,
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.newCities2 = await this.mapForecast();
    console.log(this.newCities2);
  }

  async onClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.displayValue=idAttr.nodeValue;
    console.log({ 1: target, 2: idAttr, 3: value });
    console.log(this.newCities2);
    //if (this.forecastData.length == 0) {
     let opObj = this.newCities2.filter(function (o: any) {
       return o.id == value;
     });
     console.log(opObj);
      this.cardData = await this.http.get(opObj[0].forecastURL).toPromise().then((res:any) => {
       //console.log(res['properties'].periods)
       return res['properties'].periods;
      });
      console.log(this.cardData);
    //}
  }

  mapForecast() {
    let arr :any= [];
    this.cities.map(async item => {
      let obj =  {
        id: item.id,
        forecastURL: await this.weatherService.getWeather(item.Lat, item.Lon)
      };
      
      arr.push(obj);
      console.log(arr);
      this.newCities2 = arr;
    });
  }
}
