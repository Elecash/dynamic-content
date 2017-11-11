import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IView } from '../i-view';

@Component({
    selector: 'app-view-two',
    templateUrl: './view-two.component.html',
    styleUrls: [ './view-two.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class ViewTwoComponent implements OnInit, IView {
    customMessage = '';

    constructor() {
    }

    ngOnInit() {
    }

}
