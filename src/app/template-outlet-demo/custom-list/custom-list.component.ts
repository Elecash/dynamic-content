import { Component, ContentChild, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { IItem } from '../template-outlet-demo.component';

@Component({
    selector: 'app-custom-list',
    templateUrl: './custom-list.component.html',
    styleUrls: [ './custom-list.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class CustomListComponent implements OnInit {
    @Input() items: Array<IItem> = [];

    @ContentChild(TemplateRef) renderer;

    constructor() {
    }

    ngOnInit() {
    }

}
