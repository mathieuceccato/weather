import { Injectable } from '@angular/core';
import { Coordinates, Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AlertService } from './alert.service';


@Injectable()
export class PositionService {

    constructor(private geolocation: Geolocation,
                private errorService: AlertService) {
    }

    public activateGeolocation(): Promise<Coordinates> {
        return this.geolocation.getCurrentPosition()
        .then((res: Geoposition) => res.coords)
        .catch(() => this.errorService.displayAlert({
            title: 'Whoops',
            subTitle: 'Une erreur est survenue lors de l\'obtention des informations sur votre position',
            buttons: ['OK']
        }));
    }
}
