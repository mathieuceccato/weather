import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from 'ionic-angular';


@Injectable()
export class AlertService {

    constructor(private alertCtrl: AlertController) {
    }

    public displayAlert(opts: AlertOptions): Promise<any> {
        return this.alertCtrl.create({...opts}).present();
    }
}
