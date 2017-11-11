import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IView } from '../i-view';

@Component({
    selector: 'app-view-one',
    templateUrl: './view-one.component.html',
    styleUrls: [ './view-one.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class ViewOneComponent implements OnInit, IView {
    customMessage = '';

    constructor() {
    }

    ngOnInit() {
    }

}
