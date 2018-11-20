import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Weather } from '../../interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';


@Component({
    selector: 'page-forecast',
    templateUrl: 'forecast.html'
})
export class ForecastPage {
    public currentWeather: Weather;
    public forecast: Weather[];

    constructor(private nav: NavParams,
                private weatherService: WeatherService) {
        this.currentWeather = this.nav.get('city');
        this.getForecast(this.currentWeather.city)
    }

    private getForecast(cityName: string): void {
        this.weatherService.getForecastWithCityName(cityName)
            .subscribe(forecast => {
                console.log('forecast', forecast);
                this.forecast = forecast;
            });
    }
}
