import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ForecastPage } from '../pages/forecast/forecast';
import { FavoritePage } from '../pages/favorite/favorite';
import { MyPositionComponent } from '../pages/favorite/my-position/my-position.component';

import { HttpWrapper } from '../services/http-wrapper';
import { AlertService } from '../services/alert.service';
import { WeatherService } from '../services/weather.service';
import { PositionService } from '../services/position.service';


@NgModule({
    declarations: [
        MyApp,
        FavoritePage,
        MyPositionComponent,
        ForecastPage,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        FavoritePage,
        ForecastPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        AlertService,
        WeatherService,
        PositionService,
        HttpWrapper,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    ],
})
export class AppModule {
}
