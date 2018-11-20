import { Component, OnInit } from '@angular/core';
import { Weather } from '../../../interfaces/weather.interface';
import { PositionService } from '../../../services/position.service';
import { WeatherService } from '../../../services/weather.service';
import { ForecastPage } from '../../forecast/forecast';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'my-position',
    templateUrl: './my-position.component.html',
})
export class MyPositionComponent implements OnInit {
    public weather: Weather;

    constructor(private navCtrl: NavController,
                private positionService: PositionService,
                private weatherService: WeatherService) {
    }

    public ngOnInit(): void {
        this.weather = this.weatherService.weatherOnPosition;
    }

    public activateLocation(): void {
        this.positionService.activateGeolocation()
        .then(coords => {
            if (coords && coords.latitude) {
                this.getWeatherWithCoords(coords);
            }
        });
    }

    public showForecast(city: Weather): void {
        this.navCtrl.push(ForecastPage, { city });
    }

    private getWeatherWithCoords(coords: Coordinates): void {
        this.weatherService.getWeatherWithCoords(coords)
        .subscribe(weather => {
            this.weather = weather;
            console.log('weather', weather);
        });
    }
}
