import { Injectable } from '@angular/core';

import { environment } from '../environment/environment';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { HttpWrapper } from './http-wrapper';
import { Weather } from '../interfaces/weather.interface';


@Injectable()
export class WeatherService {
    private _weatherOnPosition: Weather;
    private _favorites: Weather[] = [];

    constructor(private http: HttpWrapper) {
    }

    public get weatherOnPosition(): Weather {
        return this._weatherOnPosition;
    }

    public get favorites(): Weather[] {
        return [...this._favorites];
    }

    public getWeatherWithCoords(coords: Coordinates): Observable<Weather> {
        return this.http.get(environment.api + `weather?lat=${coords.latitude}&lon=${coords.longitude}`)
            .map(res => this.extractData(res))
            .do(weather => this._weatherOnPosition = weather);
    }

    public getWeatherWithCityName(cityName: string): Observable<Weather> {
        return this.http.get(environment.api + `weather?q=${cityName}`)
        .map(res => this.extractData(res))
        .do(weather => this._favorites.push(weather));
    }

    public getForecastWithCityName(cityName: string): Observable<Weather[]> {
        return this.http.get(environment.api + `forecast/daily?cnt=5&q=${cityName}`)
        .do (res => console.log('res', res))
        .map(res => {
            res.list.map(item => this.extractData(item));
            return res;
        });
    }

    private extractData(res): Weather {
        return {
            id: res.id,
            city: res.name,
            hour: moment(res.dt * 1000).format('LT'),
            temperature: {
                current: Math.round(res.main.temp),
                min: Math.round(res.main.temp_min),
                max: Math.round(res.main.temp_max),
                humidity: res.main.humidity,
                pressure: res.main.pressure,
            },
            infos: {
                main: res.weather[0].main,
                description: res.weather[0].description,
                icon: 'assets/weather/' + res.weather[0].icon + '.png',
            },
        };
    }
}
