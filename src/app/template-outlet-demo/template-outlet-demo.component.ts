import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface IItem {
    speaker: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-template-outlet-demo',
    templateUrl: './template-outlet-demo.component.html',
    styleUrls: [ './template-outlet-demo.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class TemplateOutletDemoComponent implements OnInit {
    items: Array<IItem> = [
        {
            speaker: 'Fernando Sejas',
            title: 'Traduciendo Aplicaciones Angular con ngx-translate',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque purus et
            vulputate laoreet. Maecenas eu velit non metus luctus pellentesque non eu sem. Cras in ipsum dolor.`
        },
        {
            speaker: 'Jose Ignacio Cabrera',
            title: 'Materializando el Diseño de tu Aplicación',
            description: `Etiam scelerisque sapien ex, ac bibendum metus aliquet sed. Fusce non sapien tellus.
            Morbi erat leo, mattis eget magna at, semper egestas sapien. Sed nec tincidunt mi.`
        },
        {
            speaker: 'Oscar Gonzáles',
            title: 'Dashboard con Componentes Dinámicos',
            description: `Integer luctus sapien ante. Fusce accumsan diam luctus, rhoncus ante ac, ornare justo.
            Morbi commodo dictum nibh a consequat. Mauris vitae interdum arcu.`
        },
        {
            speaker: 'Kenji Lozano',
            title: 'Angular + Meteor ¡Real Time!',
            description: `In efficitur placerat quam. Pellentesque sed metus nec diam gravida accumsan nec
            tristique nulla. Quisque lacinia velit non lorem egestas pulvinar. Aenean sapien lectus, lacinia
            pretium porta ut, molestie ut metus. Donec urna mauris, tempor ut laoreet et, sodales a dolor.`
        },
        {
            speaker: 'Raúl Jiménez',
            title: 'Creando Contenido Dinámico con Angular',
            description: `Nam et dui vel lorem congue tempus at quis neque. Curabitur id nulla sed augue ultricies
            convallis. Fusce risus felis, ullamcorper in ex eu, dignissim aliquam ligula.`
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
