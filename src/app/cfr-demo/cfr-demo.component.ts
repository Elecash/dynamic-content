import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';
import { IView } from './i-view';

@Component({
    selector: 'app-cfr-demo',
    templateUrl: './cfr-demo.component.html',
    styleUrls: [ './cfr-demo.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class CfrDemoComponent implements OnInit {
    @ViewChild('placeholder', { read: ViewContainerRef }) viewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    addItem(type: string) {
        let clazz;
        let customMessage: string;

        switch (type) {
            case 'one':
                clazz = ViewOneComponent;
                customMessage = 'Hola Angular Bolivia!';
                break;
            case 'two':
                clazz = ViewTwoComponent;
                customMessage = 'Hello Angular Bolivia!';
                break;
            default:
                console.error('No class found');
        }

        const factory = this.componentFactoryResolver.resolveComponentFactory(clazz);
        const component = this.viewContainerRef.createComponent(factory);
        (component.instance as IView).customMessage = customMessage;
    }
}
