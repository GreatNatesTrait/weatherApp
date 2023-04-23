import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { AlertModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'weather', component: WeatherComponentComponent}
    ]),
    AlertModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    WeatherComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
