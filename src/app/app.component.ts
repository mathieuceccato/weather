import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritePage } from '../pages/favorite/favorite';


@Component({
    templateUrl: 'app.html',
})
export class MyApp {
    rootPage: any = FavoritePage;

    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
