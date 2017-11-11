import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cfr-demo',
        loadChildren: './cfr-demo/cfr-demo.module#CfrDemoModule'
    },
    {
        path: 'template-outlet-demo',
        loadChildren: './template-outlet-demo/template-outlet-demo.module#TemplateOutletDemoModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
