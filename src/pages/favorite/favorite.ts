import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../interfaces/weather.interface';
import { AlertService } from '../../services/alert.service';
import { NavController } from 'ionic-angular';
import { ForecastPage } from '../forecast/forecast';


@Component({
    selector: 'page-favorite',
    templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit {
    public favorites: Weather[] = [];

    constructor(private navCtrl: NavController,
                private weatherService: WeatherService,
                private alertService: AlertService) {
    }

    public ngOnInit(): void {
        this.favorites = this.weatherService.favorites;
    }

    public addCity(): void {
        this.alertService.displayAlert({
            title: 'Add a city to your favorites',
            message: 'Enter the name of the city you want to add',
            inputs: [
                {
                    name: 'cityName',
                    placeholder: 'City name',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: data => this.getWeatherByName(data.cityName),
                },
            ],
        })
        .catch(e => console.warn('An error occurred', e));
    }

    public showForecast(city: Weather): void {
        this.navCtrl.push(ForecastPage, { city });
    }

    private getWeatherByName(cityName: string): void {
        if (!cityName) {
            return;
        }

        this.weatherService.getWeatherWithCityName(cityName)
        .subscribe(city => this.favorites.push(city),
            e => this.alertService.displayAlert({
                title: 'Whoops',
                subTitle: e.error.message,
                buttons: ['OK'],
            }),
        );
    }

}
